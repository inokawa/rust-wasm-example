use image;
use image::error::*;

pub struct Image {
    pub pixels: Vec<u8>,
    pub width: u32,
    pub height: u32,
}

pub fn invert(buffer: &[u8]) -> Result<Image, ImageError> {
    let mut img = match image::load_from_memory(buffer) {
        Ok(img) => img,
        Err(e) => return Err(e),
    };

    img.invert();

    let rgba = img.to_rgba();
    let width = rgba.width();
    let height = rgba.height();
    Ok(Image {
        pixels: rgba.into_vec(),
        width,
        height,
    })
}
