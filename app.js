/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// I] VARIABLES
// NAVBAR BTNS
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelector(".nav-items-group");
const navHeight = navbar.getBoundingClientRect().height;

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
const overlay = document.querySelector(".blur-wrapper");
const mode = document.querySelector(".mode-swap");
const modeImg = document.querySelector(".mode-swap-icon");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// II] FUNCTIONS

// FUNCITONALITY - REVEAL elements on scroll
const slideEle = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");

  observer.unobserve(entry.target);
};

// FUNCITONALITY - STICKY navbar
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// FUNCITONALITY - OPEN NAVBAR
const openNav = (e) => {
  e.preventDefault();
  navItems.style.left = "0";

  overlay.classList.remove("d-none");
  overlay.classList.add("overlay");
  // document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").classList.remove("enable-scroll");
  document.querySelector("body").classList.add("stop-scroll");
};

// FUNCITONALITY - CLOSE NAVBAR
const closeNav = (e) => {
  e.preventDefault();

  overlay.classList.remove("overlay");
  overlay.classList.add("d-none");
  // document.querySelector("body").style.overflowY = "scroll";
  document.querySelector("body").classList.remove("stop-scroll");
  document.querySelector("body").classList.add("enable-scroll");
  navItems.style.left = "-700px";
};

// FUNCTIONALITY - TOGGLE DARK & LIGHT MODE
const toggleMode = function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeImg.src = "img/icon-2.png";
    document.body.style.backgroundColor = "var(--bg-bd-clr)";
  } else {
    document.body.style.backgroundColor = "#fff6f6";
    modeImg.src = "img/icon-1.png";
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// EVENT LISTENERS
btnHamburger.addEventListener("click", openNav);
btnClose.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
mode.addEventListener("click", toggleMode);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
closeNav();

// SMOOTH SCROLL ON NAVBAR
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-link")) {
      const clicked = e.target;
      const id = clicked.getAttribute("href");

      navItems.style.left = "-700px";
      // document.body.style.overflowY = "scroll";
      document.body.classList.remove("stop-scroll");
      document.body.classList.add("enable-scroll");
      overlay.classList.remove("overlay");
      document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// STICKY navbar
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(sectionHeader);

// REVEAL elements onscroll
const sectionObserver = new IntersectionObserver(slideEle, {
  root: null,
  threshold: 0.1,
});
sectionsAll.forEach((section) => {
  section.classList.add("hidden");
  sectionObserver.observe(section);
});
