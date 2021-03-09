
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click', function () {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
      }
    });
    //burger animation
    // burger.classList.toggle('toggle');
  });


}
navSlide();

let topnav = document.getElementById('topnav');
let sticky = topnav.offsetTop;

const stickyTopnav = () => {
  if (window.pageYOffset > sticky) {
    topnav.classList.add('sticky');
  } else {
    topnav.classList.remove('sticky');
  }
}

window.onscroll = stickyTopnav;