"use strict";

const header = document.querySelector(".header");

const navHeight = header.getBoundingClientRect().height;
const sectionHero = document.querySelector(".section-hero");

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
    setTimeout(() => {
      i = 0;
    }, 500);
  }
};
setInterval(writeText, 100);
