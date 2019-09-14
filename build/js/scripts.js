let dropdown = document.querySelector(".dropdown-text");
let close = document.querySelector(".close");
let textBlock = document.querySelector(".text-block");

dropdown.addEventListener("click", () => {
  textBlock.style.display = "block";

});

close.addEventListener("click", () => {
  textBlock.style.display = "none";
});

let slide = document.querySelectorAll(".slide");
let fon = document.querySelector(".background");
let imgSlide = document.querySelectorAll(".img-slide");
let info = document.querySelector(".info-for-slide");

class Slide {
  constructor() {
    this.sliderText = [
      "Text - 1  ....",
      "Text - 2  ....",
      "Text - 3  ....",
      "Text - 4  ....",
      "Text - 5  ....",
      "Text - 6  ...."
    ];

    this.sliderImg = [
      "url(picture/fon-1.jpg)",
      "url(picture/fon-2.jpg)",
      "url(picture/fon-3.jpg)",
      "url(picture/fon-4.jpg)",
      "url(picture/fon-5.jpg)",
      "url(picture/fon-6.jpg)"
    ];
  }

  checkSlide(slide) {
    slide.style.transform = "scale(1.5, 1.5)";
  }
}
let slider = new Slide();

function SlideImg() {
  // Получаем SRC картинки, по которой кликнул
  let img = this.querySelectorAll("img")[0].getAttribute("src");
  // !! получение индекса слайда через data-slide-index
  let indexSlide = this.querySelectorAll("img")[0].getAttribute(
    "data-slide-index"
  );

  // Помещаем SRC картинки в background
  fon.style.background = `url(${img})`;
  fon.style.backgroundSize = "cover";
  info.innerHTML = slider.sliderText[indexSlide];

  // This тут будет являться самим элементом, по которому мы кликнули и вызвали SlideImg
  // Мы этот this передаём в checkSlide чтобы там уже обратиться к этому элементу
  slider.checkSlide(this);

  // !! уменьшение не выделенного слайда
  for (let i = 0; i < slide.length; i++) {
    if (i != indexSlide) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

// Здесь мы циклом проходим по всем слайдам и вешаем на них обработчик событий в который передаём функцию SlideImg
for (var i = 0; i < imgSlide.length; i++) {
  imgSlide[i].addEventListener("click", SlideImg);
}

var imageIndex = 1;

function changeSliderTimer() {
  slide[imageIndex].click();

  imageIndex++;

  if (imageIndex >= slide.length) {
    imageIndex = 0;
  }
}

var imgTimer = setInterval(changeSliderTimer, 5000);
