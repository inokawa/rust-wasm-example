use flate2::write::GzEncoder;
use flate2::Compression;
use std::io::prelude::*;

pub fn gzip(buffer: &[u8]) -> Result<Vec<u8>, std::io::Error> {
    let mut e = GzEncoder::new(Vec::new(), Compression::default());
    e.write_all(buffer)?;
    e.finish()
}
