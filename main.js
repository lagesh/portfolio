
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');

  // add home link to drowdown menu
  let newNavLink = document.createElement('li');
  let newInnerText = document.createTextNode('home');
  newNavLink.style.opacity = '1';
  newNavLink.appendChild(newInnerText);
  nav.insertBefore(newNavLink, nav.childNodes[0]);

  //set href of home link to top of page
  newNavLink.addEventListener('click', function () {
    window.scrollTo(0, 0);
  })

  burger.addEventListener('click', function () {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
       link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });
  
    //burger animation
    burger.classList.toggle('toggle');
  });


}
navSlide();

//fixed sticky nav background on scroll
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