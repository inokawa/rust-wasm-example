use wasm_bindgen::prelude::*;
use web_sys::console;

use mod_c;
use rs_image;

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    console::log_1(&JsValue::from_str("Hello world!"));

    Ok(())
}

#[wasm_bindgen]
pub fn greet_c(n: u32) -> u32 {
    mod_c::hi(n)
}

#[wasm_bindgen]
pub fn invert(buffer: &[u8]) -> Result<Vec<u8>, JsValue> {
    let res = rs_image::invert(buffer);
    match res {
        Ok(r) => Ok(r),
        Err(e) => Err(JsValue::from(e.to_string())),
    }
}
