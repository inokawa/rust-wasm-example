use image;
use image::error::*;

pub fn invert(buffer: &[u8]) -> Result<Vec<u8>, ImageError> {
    let mut img = match image::load_from_memory(buffer) {
        Ok(img) => img,
        Err(e) => return Err(e),
    };

    img.invert();
    let rgba = img.to_rgba();

    Ok(rgba.into_vec())
}