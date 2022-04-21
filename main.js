

const hamburgerIcon = document.querySelector('.nav-toggle');
const navbarItems = document.querySelector('.nav-items');

hamburgerIcon.addEventListener('click', function(){
   navbarItems.classList.toggle('navbar-active');
})