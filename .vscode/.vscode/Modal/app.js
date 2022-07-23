let body=document.querySelector('body');
let main = document.querySelector('main')
let btnOpen = document.querySelector('.open');
let btnClose= document.querySelector('.close');
btnOpen.addEventListener('click' , ()=> {
    main.classList.toggle('show')
})
btnClose.addEventListener('click' , ()=> {
  main.classList.remove("show");
})


