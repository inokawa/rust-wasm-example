use yoin::ipadic;

pub fn tokenize(text: String) -> String {
    let tokenizer = ipadic::tokenizer();
    let tokenized = tokenizer.tokenize(&text);
    let res: Vec<&str> = tokenized.iter().map(|t| t.surface().clone()).collect();
    String::from(res[0])
}
