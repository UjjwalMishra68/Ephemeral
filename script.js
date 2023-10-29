const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
gsap.from(".nav-left li,.nav-middle,.nav-right", {
    stagger: 0.2,
    y: 20,
    duration: 1,
    opacity: 0,
    ease: Power2
})
Shery.textAnimate(".headings h1", {
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect(".middle-img img", {
    style: 3,
    config: { "uFrequencyX": { "value": 10.74, "range": [0, 100] }, "uFrequencyY": { "value": 18.18, "range": [0, 100] }, "uFrequencyZ": { "value": 30.58, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 64 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6787450287229342 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    preset: "./presets/wigglewobble.json",
});

Shery.imageEffect(".page3-left", {
    style: 5,
    duration: 2,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.8, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.7647371178330755 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 30 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true,
})
gsap.from(".middle-img img,.left-img img", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: Power2
})


function videoAnimation() {
    document.querySelector(".page4-text button")
        .addEventListener("mouseover", () => {
            gsap.to(".page4 video", {
                opacity: 1,
                duration: 1,
                ease: Power4
            })
        })
    document.querySelector(".page4-text button")
        .addEventListener("mouseleave", () => {
            gsap.to(".page4 video", {
                opacity: 0,
                duration: 0.7,
                ease: Power4
            })
        })
}
videoAnimation()
