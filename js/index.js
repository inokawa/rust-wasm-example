import * as dom from "./dom";

(async () => {
  const wasm = await import("../pkg/index.js");

  dom.addRow(
    dom.createButton("Hello from C", () => {
      const num = wasm.greet_c(99);
      alert(num);
    })
  );

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const sampleRate = ctx.sampleRate;
  dom.addRow(
    dom.createButton("Synth audio", () => {
      const sec = 1;
      const resBuf = wasm.synth(440, sec, sampleRate);

      const audioBuffer = ctx.createBuffer(2, sec * sampleRate, sampleRate);
      audioBuffer.getChannelData(0).set(resBuf);
      audioBuffer.getChannelData(1).set(resBuf);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.start();
    })
  );

  dom.addRow(
    dom.createInput("Load image and modify", "file", (e) => {
      const files = e.target.files;
      if (!files) return;
      const file = files[0];

      const fileReader = new FileReader();
      fileReader.onload = () => {
        const buffer = new Uint8Array(fileReader.result);
        const res = wasm.invert(buffer);

        const w = res.width;
        const h = res.height;
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", w);
        canvas.setAttribute("height", h);
        dom.addRow(canvas);

        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(w, h);
        imageData.data.set(res.pixels);
        ctx.putImageData(imageData, 0, 0);
      };
      fileReader.readAsArrayBuffer(file);
    })
  );
})();
