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

  checkSlide() {
    this.style.transform = "scale(1.5, 1.5)";

    //   for (let i = 0; i < slide.length; i++) {
    //     if (i != slide.indexOf(this)) {
    //       imgSlide[i].style.transform = "scale(1, 1)";
    //     }
    //   }
    // }
  }
}
let slider = new Slide();

function Slide1() {
  fon.style.backgroundSize = "cover";
  info.innerHTML = slider.sliderText[0];
  slider.checkSlide();
}

function Slide2() {
  fon.style.background = slider.sliderImg[1];
  fon.style.backgroundSize = "cover";
  slider.checkSlide();
}

function Slide3() {
  fon.style.background = slider.sliderImg[2];
  fon.style.backgroundSize = "cover";

  info.innerHTML = slider.sliderText[2];

  slider.checkSlide();
}

function Slide4() {
  fon.style.background = slider.sliderImg[3];
  fon.style.backgroundSize = "cover";

  info.innerHTML = slider.sliderText[3];

  slider.checkSlide();
}

function Slide5() {
  fon.style.background = slider.sliderImg[4];
  fon.style.backgroundSize = "cover";

  info.innerHTML = slider.sliderText[4];

  slider.checkSlide();
}

function Slide6() {
  fon.style.background = slider.sliderImg[5];
  fon.style.backgroundSize = "cover";

  info.innerHTML = slider.sliderText[5];

  slider.checkSlide();
}

imgSlide[0].addEventListener("click", Slide1);
imgSlide[1].addEventListener("click", Slide2);
imgSlide[2].addEventListener("click", Slide3);
imgSlide[3].addEventListener("click", Slide4);
imgSlide[4].addEventListener("click", Slide5);
imgSlide[5].addEventListener("click", Slide6);

var imageIndex = 1;

function changeSliderTimer() {
  slide[imageIndex].click();

  imageIndex++;

  if (imageIndex >= slide.length) {
    imageIndex = 0;
  }
}

var imgTimer = setInterval(changeSliderTimer, 5000);
