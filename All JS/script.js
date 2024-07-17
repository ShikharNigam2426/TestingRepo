document.addEventListener('DOMContentLoaded', function() {
   // Rotating the BMW Logo on hovering the card using GSAP
   const carCards = Array.from(document.getElementsByClassName('CarCard'));
   carCards.forEach(card => {
       const logo = card.querySelector('.logo');
       card.addEventListener('mouseenter', () => {
           gsap.to(logo, { rotation: 360, duration: 1 });
       });
       card.addEventListener('mouseleave', () => {
           gsap.to(logo, { rotation: -360, duration: 1 });
       });
   });
});
