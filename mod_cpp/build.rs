fn main() {
    cc::Build::new()
        .cpp(true)
        .file("src/cpp/bar.cpp")
        .cpp_link_stdlib("c++")
        .flag("-emit-llvm")
        .compile("bar");
}
