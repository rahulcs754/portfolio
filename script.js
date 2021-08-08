
/* mobile js */
const lineMobile = document.querySelector('.mobile-menu');
const mainMenu  = document.querySelector('#main_menu');
const linkName  = document.querySelector('.list-item-inline');

function showMenu(){
    mainMenu.style.display = "block";
}

function hideMenu(){
    mainMenu.style.display = "none";
}

lineMobile.addEventListener("mouseover",showMenu,false); 
linkName.addEventListener('click',hideMenu,false);