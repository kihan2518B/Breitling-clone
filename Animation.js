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

gsap.fromTo(".nav-link",
    {
        opacity: 0,
        // duration: 2,
        // delay: 2
    },
    {
        opacity: 10,
        // duration: 2,
        delay: 2
    })

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