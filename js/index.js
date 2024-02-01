const barsButton = document.getElementById("bars");
const listBars = document.getElementById("list-bars");

barsButton.addEventListener("click", function () {
  //   listBars.style.display = "block";
  listBars.classList.toggle("bars-active");
});
