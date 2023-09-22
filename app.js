const btn = document.querySelector("button");

const p = document.querySelector("p");

btn.addEventListener("click", function () {
   fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (p.textContent = data.value));
});
