(async () => {
  const wasm = await import("../pkg/index.js");

  const cButton = document.createElement("button");
  cButton.appendChild(document.createTextNode("Hello from C"));
  cButton.addEventListener("click", () => {
    const num = wasm.hi(99);
    alert(num);
  });
  document.body.appendChild(cButton);
})();
