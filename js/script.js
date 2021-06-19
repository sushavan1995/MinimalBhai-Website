// nav menu toggler button
const navButton = document.querySelector('.nav__main .nav__menu--toggler');
const navMenu = document.querySelector('.nav__main .nav__menu');
const navClose =document.querySelector('.nav__main .nav__button--close');
navButton.addEventListener('click', function () {
  //console.log('clicked');
  navMenu.classList.add('nav__menu--active');
  navClose.addEventListener('click', function(){
      navMenu.classList.remove('nav__menu--active');
  } )
});
