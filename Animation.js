

gsap.fromTo("#logo-1",
  {
    opacity: 0,
    duration: 2,
    x: -40,
    delay: 3,
  }, {
  opacity: 10,
  duration: 2,
  x: 0,
  delay: 3,
})

gsap.fromTo("#logo-3",
  {
    opacity: 0,
    duration: 2,
    x: 35,
    delay: 3,
  },
  {
    opacity: 10,
    duration: 2,
    x: 0,
    delay: 3,
  })


gsap.registerPlugin(ScrollTrigger);

// Loader animation
gsap.fromTo(".loader-wrapper",
  { opacity: 1 },
  {
    opacity: 1,
    duration: 3
  }
);

gsap.to(".loader-wrapper",
  {
    opacity: 0,
    duration: 0.5,
    delay: 3,
    onComplete: function () {
      gsap.set(".loader-wrapper", { display: 'none' });
    }
  }
);

let mainElement = document.getElementById('main');
setTimeout(function () {
  mainElement.style.display = "block"
  console.log(mainElement.style.display)
}, 3000); // 5000 milliseconds = 5 seconds



const bar_button = document.querySelector(".bar-icon");
const chickebar_section = document.querySelector("#chicken_bar-section");
const smallwidth = document.querySelectorAll(".smallwidth");
bar_button.addEventListener('click', () => {
  smallwidth[0].style.opacity = 0;
  smallwidth[1].style.opacity = 0;
})
const cross_button = document.querySelector(".cross");
cross_button.addEventListener('click', () => {
  chickebar_section.classList.remove("open");
  smallwidth[0].style.opacity = 1;
  smallwidth[1].style.opacity = 1;

})

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded")
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, options);

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });
  const footerBootom = document.querySelectorAll('.footer-bottom-wrapper');
  footerBootom.forEach((section) => {
    observer.observe(section);
  });

  const storeInformations = document.querySelectorAll(".animate-wrapper, .opening-hours");

  storeInformations.forEach(info => {
    // info.classList.add('.show');
    observer.observe(info);
  });

});