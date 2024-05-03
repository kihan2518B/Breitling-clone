gsap.registerPlugin()

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


gsap.fromTo("#cloud1",
    {
        x: 0,
        duration: 5,
    },
    {
        duration: 5,
        display: "hidden",
        // opacity: 0,
        x: "-100%"
    })

setTimeout(() => {
    document.getElementById("loader").hidden = true
}, 5000)

gsap.fromTo("#cloud2",
    {
        x: 0,
        duration: 5,
    },
    {
        duration: 5,
        display: "hidden",
        // opacity: 0,
        x: "100%"
    })

gsap.fromTo("#main",
    {
        scale: 0,
        duration: 5,
    },
    {
        scale: 1,
        duration: 5,
    })

gsap.fromTo(".nav-link",
    {
        opacity: 0,
        duration: 3,
        delay: 2
    },
    {
        opacity: 1,
        duration: 3,
        delay: 2
    })