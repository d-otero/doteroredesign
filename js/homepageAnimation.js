
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})   

function homeload() {
        let homeAnimation = new gsap.timeline();
        homeAnimation.fromTo(".info-container .info-container--content > *", { opacity: 0, y: 50, }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: "power2.out" }, "+=1")
            .fromTo("#social-media__socials > *", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.2, ease: "power3. out" }, "-=0.5")
            .fromTo("#social-media__cvresume", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "-=0.2")
            // .from("#main-logo", {x: -50, opacity: 0, duration: .5, ease: "power3.out"}, "-=0.4")

        return homeAnimation;
    }

    // document.addEventListener("DOMContentLoaded", function () {
        homeload();
    // })
window.addEventListener('hashchange', function () {
    if (location.hash === "#home") {
            homeload();
        }
    });



    // $(".case").on("hover", function () {
    //     gsap.to(".case", {y: -20, scale: 0.9, duration: 0.5, ease: "power2. out"})
    // })