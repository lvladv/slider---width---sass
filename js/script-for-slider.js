let slide = document.querySelectorAll(".slide");
let fon = document.querySelector(".background");
let imgSlide = document.querySelectorAll(".img-slide");
let info = document.querySelector(".info-for-slide");
let filtrSlideArr;

function Slide1() {
  fon.style.background = "url(picture/fon-1.jpg)";
  fon.style.backgroundSize = "cover";
  info.innerHTML = "Text - 1  ....";
  imgSlide[0].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 0) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

function Slide2() {
  fon.style.background = "url(picture/fon-2.jpg)";
  fon.style.backgroundSize = "cover";
  info.innerHTML = "Text - 2  ....";
  imgSlide[1].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 1) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

function Slide3() {
  fon.style.background = "url(picture/fon-3.jpg) no-repeat";
  fon.style.backgroundSize = "cover";

  info.innerHTML = "Text - 3  ....";

  imgSlide[2].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 2) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

function Slide4() {
  fon.style.background = "url(picture/fon-4.jpg) no-repeat";
  fon.style.backgroundSize = "cover";

  info.innerHTML = "Text - 4  ....";

  imgSlide[3].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 3) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

function Slide5() {
  fon.style.background = "url(picture/fon-5.jpg) no-repeat";
  fon.style.backgroundSize = "cover";

  info.innerHTML = "Text - 5  ....";

  imgSlide[4].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 4) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

function Slide6() {
  fon.style.background = "url(picture/fon-6.jpg) no-repeat";
  fon.style.backgroundSize = "cover";

  info.innerHTML = "Text - 6  ....";

  imgSlide[5].style.transform = "scale(1.5, 1.5)";
  for (let i = 0; i < slide.length; i++) {
    if (i != 5) {
      imgSlide[i].style.transform = "scale(1, 1)";
    }
  }
}

slide[0].addEventListener("click", Slide1);
slide[1].addEventListener("click", Slide2);
slide[2].addEventListener("click", Slide3);
slide[3].addEventListener("click", Slide4);
slide[4].addEventListener("click", Slide5);
slide[5].addEventListener("click", Slide6);

var imageIndex = 1;

function changeSliderTimer() {
  slide[imageIndex].click();

  imageIndex++;

  if (imageIndex >= slide.length) {
    imageIndex = 0;
  }
}

var imgTimer = setInterval(changeSliderTimer, 5000);
