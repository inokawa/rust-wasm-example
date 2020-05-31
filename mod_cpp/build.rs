fn main() {
    cc::Build::new()
        .file("src/c/bar.c")
        .flag("-emit-llvm")
        .compile("bar");
}
