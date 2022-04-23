

const hamburgerIcon = document.querySelector('.nav-toggle');
const navbarItems = document.querySelector('.nav-items');
const xIcon = document.querySelector('.x-icon');

hamburgerIcon.addEventListener('click', function(){
   navbarItems.classList.add('navbar-active');
   hamburgerIcon.classList.add('for-rotate');
   hamburgerIcon.style.display = "none";
   xIcon.style.display = "inline-block";
})

xIcon.addEventListener('click', function(){
   navbarItems.classList.remove('navbar-active');
   xIcon.classList.add('for-rotate');
   xIcon.style.display = "none";
   hamburgerIcon.style.display = "inline-block"
})
