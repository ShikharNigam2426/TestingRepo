var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%", // Animation starts when the center of the trigger element (#main) reaches the center of the viewport
        end: "150% 50%", // Animation ends when the center of the trigger element (#main) reaches 150% of the viewport width from the left
        scrub: 2, // Smoothly scrubs animation over 2 seconds
        pin: true // Pins the trigger element (#main) while animation plays
    }
});

// Animation sequence using GSAP's timeline
tl.to("#center", {
    height: "100vh" // Animates the height of element with id 'center' to 100vh
}, 'a')
.to("#top", {
    top: "-50%" // Moves element with id 'top' to top -50% of its container
}, 'a')
.to("#bottom", {
    bottom: "-50%" // Moves element with id 'bottom' to bottom -50% of its container
}, 'a')
.to("#top-h1", {
    top: "60%" // Moves element with id 'top-h1' to top 60% of its container
}, 'a')
.to("#bottom-h1", {
    bottom: "-30%" // Moves element with id 'bottom-h1' to bottom -30% of its container
}, 'a')
.from("#center", {
    z: '100', // Animates z-axis (not a standard CSS property; likely a custom GSAP property)
    opacity: '0' // Animates opacity of element with id 'center' from 0 to 1
}, 'a');


