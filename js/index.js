import * as Comlink from "comlink";
import * as dom from "./dom";

const worker = Comlink.wrap(
  new Worker("./wasm-worker.js", { name: "wasm", type: "module" })
);

(async () => {
  dom.addRow(
    dom.createButton("Hello from C", async () => {
      const num = await worker.greet_c(99);
      alert(num);
    })
  );

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const sampleRate = ctx.sampleRate;
  let source;
  dom.addRow(
    dom.createButton("Audio start", async () => {
      const sec = 1;
      const resBuf = await worker.synth(440, sec, sampleRate);

      const audioBuffer = ctx.createBuffer(2, sec * sampleRate, sampleRate);
      audioBuffer.getChannelData(0).set(resBuf);
      audioBuffer.getChannelData(1).set(resBuf);
      source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.start();
    }),
    dom.createButton("Audio stop", () => {
      if (source) {
        source.stop();
      }
    })
  );

  dom.addRow(
    dom.createInput("Load image and modify", "file", "change", (e) => {
      const files = e.target.files;
      if (!files) return;
      const file = files[0];

      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const buffer = new Uint8Array(fileReader.result);
        const res = await worker.process(buffer);

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

  const textResult = document.createElement("span");
  dom.addRow(
    dom.createInput("Tokenize Japanese", "text", "input", async (e) => {
      const res = await worker.tokenize(e.target.value);
      textResult.innerHTML = res;
    }),
    textResult
  );

  dom.addRow(
    dom.createInput("Archive file", "file", "change", (e) => {
      const files = e.target.files;
      if (!files) return;
      const file = files[0];

      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const buffer = new Uint8Array(fileReader.result);
        const resBuf = await worker.archive(buffer);
        const blob = new File([resBuf], `${file.name}.gz`, {
          type: "application/gzip",
        });
        const link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", blob.name);
        link.click();
      };
      fileReader.readAsArrayBuffer(file);
    })
  );

  await worker.init();
})();
