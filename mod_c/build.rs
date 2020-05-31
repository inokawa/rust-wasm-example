fn main() {
    cc::Build::new()
        .file("src/c/foo.c")
        .flag("-emit-llvm")
        .flag("--target=wasm32-unknown-unknown")
        .compile("foo");
}
