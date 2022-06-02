const slideImages = document.querySelectorAll(".slide-show-img");

const nextImageDelay = 4000;
let currentImgCounter = 0;

const nextImage = () => {
  slideImages[currentImgCounter].style.opacity = 0;
  currentImgCounter = (currentImgCounter + 1) % slideImages.length;
  slideImages[currentImgCounter].style.opacity = 1;
};

slideImages[currentImgCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);
