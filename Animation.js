gsap.registerPlugin();

gsap.fromTo(
  "#logo-1",
  {
    opacity: 0,
    duration: 2,
    x: -40,
    delay: 4,
  },
  {
    opacity: 10,
    duration: 2,
    x: 0,
    delay: 4,
  }
);

gsap.fromTo(
  "#logo-3",
  {
    opacity: 0,
    duration: 2,
    x: 35,
    delay: 4,
  },
  {
    opacity: 10,
    duration: 2,
    x: 0,
    delay: 4,
  }
);

gsap.fromTo(
  ".nav-link",
  {
    opacity: 0,
    duration: 3,
    delay: 2,
  },
  {
    opacity: 1,
    duration: 3,
    delay: 2,
  }
);

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector("#toggle-icon-start");
  const section = document.querySelector("#chicken_bar-section");
  const icons = document.querySelectorAll(".displayable-icons");

  icon.addEventListener("click", function () {
    section.classList.remove("translate-x-52");
    section.classList.add("translate-x-0");
    setTimeout(() => {
      icons.forEach((icon) => icon.classList.add("hidden"));
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector("#toggle-icon-end");
  const section = document.querySelector("#chicken_bar-section");
  const icons = document.querySelectorAll(".displayable-icons");

  icon.addEventListener("click", function () {
    section.classList.remove("translate-x-0");
    section.classList.add("translate-x-52");
    icons.forEach((icon) => icon.classList.remove("hidden"));
  });
});
