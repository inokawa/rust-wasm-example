import * as dom from "./dom";

(async () => {
  const wasm = await import("../pkg/index.js");

  dom.addRow(
    dom.createButton("Hello from C", () => {
      const num = wasm.greet_c(99);
      alert(num);
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
        const resBuf = wasm.invert(buffer);

        const image = new Image();
        image.onload = () => {
          const w = image.naturalWidth;
          const h = image.naturalHeight;
          const canvas = document.createElement("canvas");
          canvas.setAttribute("width", w);
          canvas.setAttribute("height", h);
          dom.addRow(canvas);

          const ctx = canvas.getContext("2d");
          const imageData = ctx.createImageData(w, h);
          imageData.data.set(resBuf);
          ctx.putImageData(imageData, 0, 0);
        };
        image.src = URL.createObjectURL(file);
      };
      fileReader.readAsArrayBuffer(file);
    })
  );
})();
