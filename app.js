// NAVBAR BTNS
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelector(".nav-items-group");

// BUTTONS
const btnHamburger = document.querySelector(".hamburger");
const btnClose = document.querySelector(".close");
const btnNav = navbar.querySelector(".nav-right-btn");

// ABOUT
const projectHeadingAll = document.querySelectorAll(".project-heading");
const allSkills = document.querySelectorAll(".skill-name");
const skills = ["HTML", "CSS", "Javascript", "Git", "C"];
const containerSkills = document.querySelector(".skill-row");

// SECTIONS
const sectionsAll = document.querySelectorAll("section");
const sectionHeader = document.querySelector(".header");
const sectionEducation = document.querySelector(".education");

// ELEMENTS
const dots = document.querySelectorAll(".dot");

// REVEAL elements on scroll
// -> Callback function
const slideEle = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");

  observer.unobserve(entry.target);
};
// Intersection Observer with callback function and options object
const sectionObserver = new IntersectionObserver(slideEle, {
  root: null,
  threshold: 0.15,
});

// Observing target intersection with viewport
sectionsAll.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

// STICKY navbar
const navHeight = navbar.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// OBSERVING navbar
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(sectionHeader);

// //
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-link")) {
      const clicked = e.target;
      const id = clicked.getAttribute("href");

      document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
    }
  });
});
const overlay = document.querySelector(".blur-wrapper");
const openNav = (e) => {
  e.preventDefault();
  navItems.style.left = "0";

  overlay.classList.add("overlay");
  document.querySelector("body").style.overflowY = "hidden";
  // overlay.style.di;
};

const closeNav = (e) => {
  e.preventDefault();
  overlay.classList.remove("overlay");
  document.querySelector("body").style.overflowY = "scroll";
  navItems.style.left = "-700px";
};

btnHamburger.addEventListener("click", openNav);
btnClose.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

const mode = document.querySelector(".mode-swap");
const modeImg = document.querySelector(".mode-swap img");
console.log(modeImg);

sectionsAll.forEach((section) => {
  if (section % 2 === 0) {
    // section.c
  }
});
const lightMode = function () {};

mode.addEventListener("click", function (e) {
  e.preventDefault();
  // let counter =
  // modeImg.src = `icon-${}`;
  document.body.classList.toggle("dark-mode");
});
