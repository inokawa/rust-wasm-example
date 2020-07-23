(async () => {
  const wasm = await import("../pkg/index.js");

  const addRow = (...elems) => {
    const div = document.createElement("div");
    elems.forEach((el) => {
      div.appendChild(el);
    });
    document.body.appendChild(div);
  };

  const cButton = document.createElement("button");
  cButton.appendChild(document.createTextNode("Hello from C"));
  cButton.addEventListener("click", () => {
    const num = wasm.greet_c(99);
    alert(num);
  });
  addRow(cButton);

  const imageLabel = document.createElement("span");
  imageLabel.appendChild(document.createTextNode("Load image and modify"));
  const imageButton = document.createElement("input");
  imageButton.setAttribute("type", "file");
  imageButton.addEventListener("change", (e) => {
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
        addRow(canvas);

        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(w, h);
        imageData.data.set(resBuf);
        ctx.putImageData(imageData, 0, 0);
      };
      image.src = URL.createObjectURL(file);
    };
    fileReader.readAsArrayBuffer(file);
  });
  addRow(imageLabel, imageButton);
})();
