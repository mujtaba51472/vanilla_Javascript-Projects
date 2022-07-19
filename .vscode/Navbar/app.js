const navItem = document.querySelector('.nav-item');
console.log(navItem)
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click' , ()=> {
    navItem.classList.toggle('nav-showing')
})