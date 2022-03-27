const button = document.querySelector('.mobile-menu-buttom');
const menu = document.querySelector('.mobile-menu');
console.log(button)
button.addEventListener('click', ()=>{
  console.log('teste')
  menu.classList.toggle('hidden');
})