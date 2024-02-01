const barsButton = document.getElementById("bars");
const listBars = document.getElementById("list-bars");

barsButton.addEventListener("click", function () {
  listBars.classList.toggle("bars-active");
});
