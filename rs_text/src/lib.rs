use yoin::ipadic;

pub fn tokenize(text: String) -> Vec<String> {
    let tokenizer = ipadic::tokenizer();
    let tokenized = tokenizer.tokenize(&text);
    tokenized
        .iter()
        .map(|t| String::from(t.surface()))
        .collect()
}
