use image;
use image::error::*;

pub struct Image {
    pub pixels: Vec<u8>,
    pub width: u32,
    pub height: u32,
}

pub fn process(buffer: &[u8]) -> Result<Image, ImageError> {
    let mut img = image::load_from_memory(buffer)?;

    img.invert();

    let mut img = img.to_rgba();
    let (width, height) = img.dimensions();
    Ok(Image {
        pixels: img.into_vec(),
        width,
        height,
    })
}
