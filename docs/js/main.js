
const menuBtn= document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menuBrand= document.querySelector('.menu_branding');
const menuNav= document.querySelector('.menu_nav');
const NAVitems= document.querySelectorAll('.navitem');

let showMenu= false;

menuBtn.addEventListener('click',togglemenu);

function togglemenu()
{
if (!showMenu)
{
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBrand.classList.add('show');
    menuNav.classList.add('show');
    NAVitems.forEach(item => item.classList.add('show'));
    showMenu=true;
}
else
{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBrand.classList.remove('show');
    menuNav.classList.remove('show');
    NAVitems.forEach(item =>item.classList.remove('show'));  
    showMenu=false;
}
}
 