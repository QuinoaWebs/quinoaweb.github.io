const mainNav = document.getElementById('main-nav');
const toggleMenu = document.getElementById('toggle-menu');
const toggleBar = document.getElementById('toggle-bar');
const headerElement = document.getElementById('header');
const mainElement = document.getElementById('main');



toggleMenu.addEventListener('click', () => {
  toggleBar.classList.toggle('active');
  mainNav.classList.toggle('main-nav--show');
  header.classList.toggle('blur');
  main.classList.toggle('blur');
  document.body.classList.toggle('no-scroll');

});

mainNav.addEventListener("click", (e)=> {
 if(e.target.classList.contains('main-menu__link')){

  toggleBar.classList.remove("active"),
  mainNav.classList.remove("main-nav--show"),
  header.classList.remove("blur"),
  main.classList.remove("blur"),
  document.body.classList.toggle("no-scroll");
 }

});
