const data = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

window.addEventListener("DOMContentLoaded", () => {
  createImgSlider();
});

const createImgSlider = () => {
  const imgSliderContainer = document.querySelector(".slider-container");

  data.forEach((image) => {
    const div = document.createElement("div");
    div.classList.add("img-slider");

    const img = document.createElement("img");
    img.classList.add("img-slider-responsive");
    img.src = image;

    div.appendChild(img);
    imgSliderContainer.appendChild(div);
  });
};

const btnAll = document.querySelectorAll(".btn");
let slide = 0;
btnAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const imgSlide = document.querySelectorAll(".img-slider");
    if (e.currentTarget.classList.contains("btn-right")) {
 
    }
  });
});
