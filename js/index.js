(async () => {
  const wasm = await import("../pkg/index.js");
  wasm.hello();
})();
