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
})();
