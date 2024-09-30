let currentIndex =
  localStorage.getItem("currentIndex") ||
  document.currentScript.getAttribute("currentIndex");
currentIndex = parseInt(currentIndex);

const images = [
  "cover4.gif",
  "tokyo-night.gif",
  "ciri.webp",
  "nebula.webp",
  "retro.webp",
  "ruins.webp",
  "statue.webp",
];

const colorSets = [
  {
    // catppuccin.gif color scheme
    "--text-color": "#cdd6f4",
    "--hover-color": "#89b4fa",
    "--accent-color": "#b4befe",
    "--accent-color-2": "#f38ba8",
    "--background-color": "#1e1e2e",
  },
  {
    // tokyo-night.gif colorscheme
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
  {
    // ciri tokyo-night.gif colorscheme
    "--text-color": "#eaf3ff",
    "--hover-color": "#b55e6b",
    "--accent-color": "#356f4b",
    "--accent-color-2": "#41973f",
    "--background-color": "#1a1b26",
  },
  {
    // nebula tokyo-night.gif colorscheme
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
  {
    // retro tokyo-night.gif colorscheme
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
  {
    // ruins tokyo-night.gif colorscheme
    "--text-color": "#4f778b",
    "--hover-color": "#ffffff",
    "--accent-color": "#84b9cc",
    "--accent-color-2": "#386547",
    "--background-color": "#1a1b26",
  },
  {
    // statue tokyo-night.gif colorscheme
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
];

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = "./src/images/" + images[i];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  localStorage.setItem("currentIndex", currentIndex); // Update currentIndex in localStorage
  const imageElement = document.getElementById("carouselImage");
  imageElement.style.opacity = 0;
  updateColors(currentIndex);

  setTimeout(() => {
    imageElement.src = "./src/images/" + images[currentIndex];
    imageElement.style.opacity = 1;
  }, 200); // Match the transition duration in style.css
}

function updateColors() {
  const colorSet = colorSets[currentIndex];
  // Iterate through the colorSet and set the CSS variables
  for (const [property, value] of Object.entries(colorSet)) {
    document.documentElement.style.setProperty(property, value);
  }
}

// Set colors with current index first
updateColors(currentIndex);

// Set the initial image
document.getElementById("carouselImage").src =
  "./src/images/" + images[currentIndex];

// Image is opacity 0 and text is translated off screen by default
// Add the loaded class to the image and text to animate them in
window.onload = function () {
  document.getElementById("image").classList.add("loaded");
  document.getElementById("text").classList.add("loaded");
  document.getElementsByTagName("html")[0].classList.add("loaded");
  // Preload the remaining images
  preloadImages();
};
