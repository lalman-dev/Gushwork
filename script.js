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

// FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// FAQ MODAL
const openModalBtn = document.getElementById("open-catalog-modal");
const closeModalBtn = document.getElementById("close-modal");
const catalogModal = document.getElementById("catalog-modal");
const modalOverlay = document.querySelector(".catalog-overlay");

// OPEN MODAL
openModalBtn.addEventListener("click", () => {
  catalogModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

// CLOSE MODAL
function closeModal() {
  catalogModal.classList.remove("active");
  document.body.style.overflow = "auto";
}
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// FORM SUBMIT
const catalogForm = document.querySelector(".catalog-form");
catalogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Catalogue request submitted successfully!");
  closeModal();
  catalogForm.reset();
});

// GLOBAL MODAL
const globalModal = document.getElementById("global-modal");
const globalOverlay = document.querySelector(".global-overlay");
const closeGlobalModalBtn = document.querySelector(".close-global-modal");
const modalTitle = document.getElementById("modal-title");

// BUTTONS
const contactBtn = document.getElementById("contact-btn");
const quoteBtn = document.getElementById("quote-btn");
const quoteActionBtn = document.getElementById("quote-action-btn");

// OPEN MODAL
function openGlobalModal(title) {
  modalTitle.textContent = title;
  globalModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// CLOSE MODAL
function closeGlobalModal() {
  globalModal.classList.remove("active");
  document.body.style.overflow = "auto";
}
contactBtn.addEventListener("click", () => {
  openGlobalModal("Contact Our Team");
});
quoteBtn.addEventListener("click", () => {
  openGlobalModal("Request Custom Quote");
});
quoteActionBtn.addEventListener("click", () => {
  openGlobalModal("Request Project Quote");
});
closeGlobalModalBtn.addEventListener("click", closeGlobalModal);
globalOverlay.addEventListener("click", closeGlobalModal);

// TECHNICAL SPECS SCROLL
const specsBtn = document.getElementById("specs-btn");
const specsSection = document.getElementById("technical-specs");
specsBtn.addEventListener("click", () => {
  specsSection.scrollIntoView({
    behavior: "smooth",
  });
});

// DOWNLOAD TOAST
const downloadBtn = document.getElementById("download-btn");
const toast = document.getElementById("toast");
downloadBtn.addEventListener("click", () => {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});
