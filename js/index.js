(async () => {
  const wasm = await import("../pkg/index.js");

  const num = wasm.hi(99);
  alert(num);

  wasm.hello();
})();
