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

// INDUSTRY SLIDER CONTROLS

const industryTrack = document.querySelector(".industry-track");
const prevIndustry = document.querySelector(".industry-prev");
const nextIndustry = document.querySelector(".industry-next");

nextIndustry.addEventListener("click", () => {
  industryTrack.style.animationPlayState = "paused";
  industryTrack.scrollBy({
    left: 340,
    behavior: "smooth",
  });
});
prevIndustry.addEventListener("click", () => {
  industryTrack.style.animationPlayState = "paused";
  industryTrack.scrollBy({
    left: -340,
    behavior: "smooth",
  });
});

// PROCESS INTERACTION

const processData = [
  {
    step: "Step 01",
    title: "High-Grade Raw Material Selection",
    description:
      "Premium PE100 raw materials are selected to ensure superior durability and infrastructure reliability.",

    points: [
      "PE100 grade material",
      "Optimal molecular weight distribution",
      "Consistent wall thickness",
    ],

    image: "./assets/images/process-1.png",
  },

  {
    step: "Step 02",
    title: "Precision Extrusion Technology",
    description:
      "Advanced extrusion systems maintain dimensional consistency and high-pressure tolerance.",

    points: [
      "Uniform extrusion pressure",
      "Advanced heating control",
      "Smooth pipe finish",
    ],

    image: "./assets/images/process-2.png",
  },

  {
    step: "Step 03",
    title: "Controlled Cooling Process",
    description:
      "Optimized cooling chambers ensure structural integrity and dimensional accuracy.",

    points: [
      "Temperature monitoring",
      "Dimensional stability",
      "Improved durability",
    ],

    image: "./assets/images/process-3.png",
  },

  {
    step: "Step 04",
    title: "Accurate Pipe Sizing",
    description:
      "Vacuum sizing tanks ensure precise outer diameters and wall uniformity.",

    points: [
      "Precise calibration",
      "Wall thickness control",
      "Roundness accuracy",
    ],

    image: "./assets/images/process-4.png",
  },

  {
    step: "Step 05",
    title: "Comprehensive Quality Testing",
    description:
      "Every batch undergoes pressure, durability, and dimensional quality checks.",

    points: [
      "Pressure testing",
      "Material inspection",
      "Long-term durability validation",
    ],

    image: "./assets/images/process-5.png",
  },

  {
    step: "Step 06",
    title: "Pipe Marking & Traceability",
    description:
      "Automated marking systems ensure traceability and compliance standards.",

    points: ["Batch coding", "Certification marking", "Compliance tracking"],

    image: "./assets/images/process-6.png",
  },

  {
    step: "Step 07",
    title: "Secure Packaging & Dispatch",
    description:
      "Finished products are packaged securely for safe transportation and delivery.",

    points: [
      "Damage protection",
      "Efficient logistics",
      "Export-ready packaging",
    ],

    image: "./assets/images/process-7.png",
  },
];

const processTabs = document.querySelectorAll(".process-tab");

const processBadge = document.querySelector(".process-badge");
const processTitle = document.querySelector(".process-title");
const processDescription = document.querySelector(".process-description");
const processPoints = document.querySelector(".process-points");
const processImage = document.querySelector("#process-image");

function updateProcess(index) {
  const item = processData[index];

  processBadge.textContent = item.step;
  processTitle.textContent = item.title;
  processDescription.textContent = item.description;

  processImage.style.opacity = 0;

  setTimeout(() => {
    processImage.src = item.image;
    processImage.style.opacity = 1;
  }, 200);

  processPoints.innerHTML = item.points
    .map((point) => `<li>${point}</li>`)
    .join("");

  processTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  processTabs[index].classList.add("active");
}

processTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    updateProcess(tab.dataset.step);
  });
});

// AUTO PLAY

let processIndex = 0;

setInterval(() => {
  processIndex++;

  if (processIndex >= processData.length) {
    processIndex = 0;
  }

  updateProcess(processIndex);
}, 5000);

// PORTFOLIO BUTTONS

const portfolioButtons = document.querySelectorAll(".portfolio-btn");

portfolioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Detailed product information page coming soon.");
  });
});

// EXPERT BUTTON

const expertBtn = document.querySelector(".expert-btn");

expertBtn.addEventListener("click", () => {
  openModal();
});

// RESOURCE DOWNLOADS

const resourceButtons = document.querySelectorAll(".resource-download-btn");

resourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Download started successfully");
  });
});

// CTA FORM

const ctaForm = document.getElementById("ctaForm");

ctaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  showToast("Quote request submitted successfully");

  ctaForm.reset();
});

// FOOTER LINKS

const footerLinks = document.querySelectorAll(".footer-column a");

footerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    showToast("Section coming soon");
  });
});
