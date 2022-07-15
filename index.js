const Url = "https://www.javascripttutorial.net/sample/promise/api.json";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

const load = (url) => fetch(url);

btn.addEventListener("click", () => {
  load(Url)
    .then((response) => response.json())
    .then((data) => (msg.innerHTML = data.message))
    .catch((err) => console.log(err));
});
