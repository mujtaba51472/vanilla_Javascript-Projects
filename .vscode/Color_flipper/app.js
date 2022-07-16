const colors = [
  "yellow",
  "red",
  "orange",
  "blue",
  "pink",
  "green",
  "gray",
  "aqua",
];
let btn = document.querySelector("#btn");
let main = document.querySelector("main");
btn.addEventListener("click", () => {
  randomColors = generatingRandomColor();
  main.style.background = colors[randomColors];
  console.log(randomColors);
});
function generatingRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
