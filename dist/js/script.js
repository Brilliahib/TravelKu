const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const moon = document.querySelector("#moon");
const html = document.querySelector("html");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

var typingEffect = new Typed("#multiText", {
  strings: ["safety!", "fun!"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});

function darkMode() {
  const moon = document.querySelector("#moon");
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    moon.innerHTML = '<i class="text-yellow-300 text-xl bx bxs-moon"></i>';
  } else {
    html.classList.add("dark");
    moon.innerHTML = '<i class="text-xl bx bxs-sun"></i>';
  }
}

darkMode();

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  moon.contains = true;
} else {
  moon.contains = false;
}

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
