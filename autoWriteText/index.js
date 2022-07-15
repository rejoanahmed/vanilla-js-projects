const text = "What a lovely weather this summer";

let pointer = 0;
const writeText = () => {
  document.body.innerText = text.slice(0, pointer);
  pointer++;
  if (pointer > text.length) clearInterval(b);
};
const b = setInterval(writeText, 100);
