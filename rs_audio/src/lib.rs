use std::f32::consts::PI;

pub fn synth(freq: f32, sec: u32, sample_rate: u32) -> Vec<f32> {
    let mut wave: Vec<f32> = Vec::new();
    for i in 0..sample_rate * sec {
        let v = (i as f32 * freq * PI * 2.0 / sample_rate as f32).sin();
        wave.push(v);
    }
    wave
}
