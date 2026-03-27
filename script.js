// Cursor Animation
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0});
    gsap.to(follower, {x: e.clientX - 16, y: e.clientY - 16, duration: 0.15});
});

// Animations on Scroll
gsap.registerPlugin(ScrollTrigger);

// Hero Title Animation
gsap.from(".main-title", {
    opacity: 0, y: 100, duration: 1.5, ease: "power4.out"
});

// Card Animations
gsap.from(".s-card", {
    scrollTrigger: {
        trigger: ".service-grid",
        start: "top 80%"
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out"
});

// Text Reveal
gsap.from(".hero-desc", {
    opacity: 0, x: -30, duration: 1, delay: 0.5
});
