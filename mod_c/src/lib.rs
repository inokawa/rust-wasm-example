use std::os::raw::c_uint;

extern "C" {
    fn foo(x: c_uint) -> c_uint;
}

pub fn hi(x: u32) -> u32 {
    unsafe { foo(x as c_uint) as u32 }
}
