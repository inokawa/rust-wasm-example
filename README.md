# rust-wasm-example

An example of porting C to WebAssembly by Rust.

## Setup

requirements

- rust
  - cargo
    - target `wasm32-unknown-unknown` is used to compile
- node
  - npm
- clang
  - needed to compile C

```sh
npm install
```

## How to run in debug mode

```sh
# Builds the project and opens it in a new browser tab. Auto-reloads when the project changes.
npm start
```

## How to build in release mode

```sh
# Builds the project and places it into the `dist` folder.
npm run build
```

## How to run unit tests

```sh
# Runs tests in Firefox
npm test -- --firefox

# Runs tests in Chrome
npm test -- --chrome

# Runs tests in Safari
npm test -- --safari
```
