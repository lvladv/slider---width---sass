let dropdown = document.querySelector(".dropdown-text");
let close = document.querySelector(".close");
let textBlock = document.querySelector(".text-block");

dropdown.addEventListener("click", () => {
  textBlock.style.display = "block";

});

close.addEventListener("click", () => {
  textBlock.style.display = "none";
});
