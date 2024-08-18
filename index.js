const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

// Détecter le glissement sur les écrans tactiles
let startX = 0;
let currentX = 0;

imageContainerEl.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

imageContainerEl.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
});

imageContainerEl.addEventListener("touchend", () => {
  if (currentX - startX > 50) {
    // Glisser vers la droite
    x = x + 45;
  } else if (startX - currentX > 50) {
    // Glisser vers la gauche
    x = x - 45;
  }
  clearTimeout(timer);
  updateGallery();
});

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000); // Rotation automatique toutes les 3 secondes
}

updateGallery();
