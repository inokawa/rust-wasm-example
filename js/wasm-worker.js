import * as Comlink from "comlink";

let wasm;
const worker = {
  init: async () => {
    wasm = await import("../pkg/index.js");
  },
  greet_c: async (...args) => wasm.greet_c(...args),
  synth: async (...args) => wasm.synth(...args),
  process: async (...args) => wasm.process(...args),
  tokenize: async (...args) => wasm.tokenize(...args),
  archive: async (...args) => wasm.archive(...args),
};

Comlink.expose(worker);
