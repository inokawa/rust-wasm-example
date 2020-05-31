use std::os::raw::c_uint;

extern "C" {
    fn bar(x: c_uint) -> c_uint;
}

pub fn hello(x: u32) -> u32 {
    unsafe { bar(x as c_uint) as u32 }
}
