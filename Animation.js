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
  "#cloud1",
  {
    x: 0,
    duration: 5,
  },
  {
    duration: 5,
    display: "hidden",
    // opacity: 0,
    x: "-100%",
  }
);

setTimeout(() => {
  document.getElementById("loader").hidden = true;
}, 5000);

gsap.fromTo(
  "#cloud2",
  {
    x: 0,
    duration: 5,
  },
  {
    duration: 5,
    display: "hidden",
    // opacity: 0,
    x: "100%",
  }
);

gsap.fromTo(
  "#main",
  {
    scale: 0,
    duration: 5,
  },
  {
    scale: 1,
    duration: 5,
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

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// Animation for each div
document.querySelectorAll("#scrollTrigger_animation").forEach((container) => {
    const img = container.querySelector("img");
    const textContainer = container.querySelector(".flex.flex-col");
    // console.log(img)
  
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "bottom 15%",
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
  
    // Set initial state
    tl.set(img, { visibility: "visible", opacity: 0 });
    tl.set(textContainer, { visibility: "visible", opacity: 0, width: 0 });
  
    // Animation
    if (container.classList.contains("invisible")) {
      // For div where image is on the left side
      tl.to(img, {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      }).to(
        textContainer,
        { opacity: 1, width: "90%", duration: 0.5, ease: "power2.inOut" },
        "-=0.5"
      );
    }
  });