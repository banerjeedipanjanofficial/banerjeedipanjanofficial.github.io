const ul =document.getElementsByTagName('ul')[0];
const nav =document.getElementsByTagName('nav')[0];
const bar=document.getElementsByClassName('fa-bars')[0];

bar.addEventListener('click',()=>{
    ul.classList.toggle('active');
    nav.classList.toggle('active');
})