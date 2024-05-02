gsap.registerPlugin()

// gsap.fromTo(".fade-element",
//     {
//         opacity: 100,
//     },
//     {
//         opacity: 0,
//         duration: 4,
//     })

// const text = new Typed("#dots", {
//     strings: ["..."],
//     typeSpeed: 400, // Adjust typing speed (milliseconds)
//     backSpeed: 80, // Adjust backspace speed (milliseconds)
//     loop: true, // Loop the animation
//     cursorChar: "",
// });
// const loader = document.querySelector(".fade-element")
// setTimeout(() => {
//     loader.classList.remove("flex");
//     loader.classList.add("hidden");
// }, 4000)

// Main

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

// gsap.fromTo(".nav-link",
//     {
//         scale: 0, // start from scale of 0 (fully hidden)
//     },
//     {
//         scale: 1, // end at scale of 1 (normal size)
//         duration: 1, // animation duration (in seconds)
//         // delay: 0.5, // delay before the animation starts (in seconds)
//         ease: "power2.out" // easing function for smoother transition
//     })

// gsap.fromTo("#Text",
//     {
//         opacity: 0,
//         duration: 3,
//         delay: 2
//     },
//     {
//         opacity: 1,
//         duration: 3,
//         delay: 3
//     })


const buttons = document.querySelectorAll('.nav-link');
console.log("buttons", buttons.length)
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