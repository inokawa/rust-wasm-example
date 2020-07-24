export const addRow = (...elems) => {
  const div = document.createElement("div");
  elems.forEach((el) => {
    div.appendChild(el);
  });
  document.body.appendChild(div);
};

export const createButton = (labelText, onClick) => {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(labelText));
  button.addEventListener("click", onClick);
  return button;
};

export const createInput = (labelText, type, onChange) => {
  const label = document.createElement("label");
  label.appendChild(document.createTextNode(labelText));
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.addEventListener("change", onChange);
  label.appendChild(input);
  return label;
};
