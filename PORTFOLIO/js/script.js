window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

/*//navbrand - uni logo
const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('mouseenter', addBounce);
//eventlistener - waits for an event such as mouse enter
navBrand.addEventListener('animationend', removeBounce);
//^removes animation after it has played one time*/

const navLinks = document.querySelectorAll('.nav-link');
//put into arrays
//navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
//navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));
//this creates a bounce for each component of the menu bar when you hover over one

function addBounce(e){
  this.classList.add('animated', 'bounce');
}

function removeBounce(e){
  this.classList.remove('animated', 'bounce');
}
