// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// PRODUCT GALLERY

const mainImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const zoomView = document.querySelector(".image-zoom");

const imageSources = [
  "./assets/product-1.jpg",
  "./assets/product-2.jpg",
  "./assets/product-3.jpg",
  "./assets/product-4.jpg",
  "./assets/product-5.jpg",
];

let currentImage = 0;
let autoSlide;

// UPDATE GALLERY

function updateGallery() {
  mainImage.src = imageSources[currentImage];
  zoomView.style.backgroundImage = `url(${imageSources[currentImage]})`;
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active-thumb");
  });
  thumbnails[currentImage].classList.add("active-thumb");
}

// THUMBNAIL CLICK
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentImage = index;
    updateGallery();
    restartAutoSlide();
  });
});

// NEXT BUTTON
document.querySelector(".next-btn").addEventListener("click", () => {
  currentImage++;
  if (currentImage >= imageSources.length) {
    currentImage = 0;
  }
  updateGallery();
  restartAutoSlide();
});

// PREV BUTTON
document.querySelector(".prev-btn").addEventListener("click", () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = imageSources.length - 1;
  }
  updateGallery();
  restartAutoSlide();
});

// AUTOPLAY
function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentImage++;
    if (currentImage >= imageSources.length) {
      currentImage = 0;
    }
    updateGallery();
  }, 3500);
}

// RESET AUTOPLAY
function restartAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// IMAGE ZOOM
const imageWrapper = document.querySelector(".main-image-wrapper");
imageWrapper.addEventListener("mousemove", (e) => {
  const rect = imageWrapper.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  zoomView.style.opacity = "1";
  zoomView.style.backgroundPosition = `${x}% ${y}%`;
  zoomView.style.backgroundSize = "220%";
});
imageWrapper.addEventListener("mouseleave", () => {
  zoomView.style.opacity = "0";
});

// INIT
updateGallery();
startAutoSlide();
