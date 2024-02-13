let tl = gsap.timeline();

tl.from(".animation", {duration: 1, y: 100, opacity: 0, ease: "power1.out"})
  .from(".hero__descr", {duration: 0.5, opacity: 0, ease: "power4.out"})
  .from(".photo-1", {duration: 0.4,scale: 0.8, opacity: 0, ease: "power1.out"})
  .from(".photo-2", {duration: 0.4,scale: 0.8, opacity: 0, ease: "power1.out"})
  .from(".photo-3", {duration: 0.4,scale: 0.8, opacity: 0, ease: "power1.out"})
  .from(".photos__author", {duration: 1, opacity: 0, ease: "power4.out"})

var burger = document.querySelector(".burger");
var closeBtn = document.querySelector(".close");
let menu = document.querySelector(".menu");

let tlMenu = gsap.timeline({paused: true});

tlMenu.to(menu, {className: 'menu menu--open'})
      .from(".menu__top", {duration: 0.5, y: -100, opacity: 0, ease: "power1.out"})
      .from(".menu__wrapper", {display: 'block'})
      .from(".menu__wrapper", {display: 'block', duration: 1, opacity: 0, y: 200})
      .from(".menu__container", {duration: 0.4, y: 0, opacity: 0})
      .from(".menu__left", {duration: 0.4, y: 20, opacity: 0})
      .from(".menu__right", {duration: 0.4, y: 20, opacity: 0})
      .from(".social", {duration: 0.4, y: 10, opacity: 0})


burger.addEventListener('click', ()=> {
  tlMenu.play()
});

closeBtn.addEventListener('click', () => {
  tlMenu.reverse()
  return
});





