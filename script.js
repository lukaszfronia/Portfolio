"use strict";

const header = document.querySelector(".header");
const btnMobile = document.querySelector(".btn-mobile-nav");
const btns = document.querySelectorAll(".nav-link");
const navHeight = header.getBoundingClientRect().height;
const sectionHero = document.querySelector(".section-hero");

const year = document.querySelector(".year");

year.innerHTML = new Date().getFullYear();

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver((entries) => {
  const [entry] = entries;

  !entry.isIntersecting
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
}, options);

observer.observe(sectionHero);

const text =
  "This is my official website portfolio to showes all detail and projects done by me.";

const heroDescription = document.querySelector(".hero-description");
let i = 0;
const writeText = () => {
  heroDescription.innerHTML = text.slice(0, i);
  i++;
  if (i > text.length) {
    // setTimeout(() => {
    //   i = 0;
    // }, 500);
  }
};
setInterval(writeText, 100);

const opnClsMenu = () => header.classList.toggle("nav-open");
btnMobile.addEventListener("click", opnClsMenu);

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const href = btn.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 20, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (btn.classList.contains("main-nav-link")) {
      opnClsMenu();
    }
  })
);

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
// Slider
const slider = () => {
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      // -100, 0, 100, 200
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = () => {
    goToSlide(0);
  };
  init();

  // Event handlers

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
