const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})

const allinks = document.querySelectorAll('.item-nav');

allinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})