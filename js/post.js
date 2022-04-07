const button = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const items = document.querySelectorAll('.mobile-menu-item')
button.addEventListener('click', ()=>{
  menu.classList.toggle('hidden');
})
items.forEach(item => {
  item.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
  })
})