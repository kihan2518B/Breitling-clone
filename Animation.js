

gsap.fromTo("#logo-1",
  {
    opacity: 0,
    duration: 2,
    x: -40,
    delay: 4,
  }, {
  opacity: 10,
  duration: 2,
  x: 0,
  delay: 4,
})

gsap.fromTo("#logo-3",
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
    delay: 5,
    onComplete: function () {
      gsap.set(".loader-wrapper", { display: 'none' });
    }
  }
);

let mainElement = document.getElementById('main');
setTimeout(function () {
  mainElement.style.display = "block"
  console.log(mainElement.style.display)
}, 5000); // 5000 milliseconds = 5 seconds

// Animation for each div
document.querySelectorAll(".second-section-container").forEach((container) => {
  const img = container.querySelector("img");
  const textContainer = container.querySelector(".flex.flex-col");
  console.log(container)

  // Animation timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
      end: "bottom 10%",
      // markers: true,
      // scrub: 0.5,
      toggleActions: "play reverse play reverse",
    },
  });

  // Set initial state
  tl.set(img, { visibility: "visible", opacity: 0 });
  tl.set(textContainer, { visibility: "visible", opacity: 0, x: 100 });

  // Animation
  tl.to(img, {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  }).to(
    textContainer,
    { opacity: 1, x: 0, duration: 0.5, ease: "power2.inOut" },
    "-=0.5"
  );
});

const buttons = document.querySelectorAll('.nav-link');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // console.log("in")
    buttons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.add('opacity-40');
      }
    });
  });

  button.addEventListener('mouseout', () => {
    // console.log("out")
    buttons.forEach(otherButton => {
      otherButton.classList.remove('opacity-40');
    });
  });
});

const bar_button = document.querySelector(".bar-icon");
const chickebar_section = document.querySelector("#chicken_bar-section");
bar_button.addEventListener('click', () => {
  chickebar_section.classList.add("open");
})
const cross_button = document.querySelector(".cross");
cross_button.addEventListener('click', () => {
  chickebar_section.classList.remove("open");
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

  const fourthsection = document.querySelectorAll('section');
  fourthsection.forEach((section) => {
    observer.observe(section);
  });

  const storeInformations = document.querySelectorAll(".animate-wrapper, .opening-hours");

  storeInformations.forEach(info => {
    // info.classList.add('.show');
    observer.observe(info);
  });

  // const section = document.querySelectorAll('section');
  // section.forEach((section) => {
  //     observer.observe(section);
  // });
});