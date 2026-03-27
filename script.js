// 1. Mouse Follower
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0});
    gsap.to(follower, {x: e.clientX - 16, y: e.clientY - 16, duration: 0.15});
});

// 2. Sayfa Açılış Animasyonu
window.onload = () => {
    const tl = gsap.timeline();

    tl.from("nav", { y: -100, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".reveal-text", { opacity: 0, x: -20, duration: 0.5 })
      .from(".main-title", { opacity: 0, y: 50, duration: 1, ease: "power4.out" }, "-=0.3")
      .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
      .from(".hero-actions", { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.5");
};

// 3. Scroll ile Kartların Gelmesi
gsap.registerPlugin(ScrollTrigger);

gsap.from(".s-card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});