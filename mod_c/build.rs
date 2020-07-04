fn main() {
    cc::Build::new()
        .file("src/c/foo.c")
        .flag("-emit-llvm")
        .compile("foo");
}
