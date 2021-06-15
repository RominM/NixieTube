  //___________________//
 //________DOM________//
//___________________//

const menu = document.querySelector(".menu");//Nav > Menu = modalbg
const forOpen = document.querySelector(".toogle");//Pour ouvrir le Menu = modal-btn
// const forClose = document.querySelector(".toogle.active")// Pour fermer le Menu

const launchMenu = () => {
    menu.style.opacity = 1;
}

const overMenu = () => {
    menu.style.opacity = 0;
}

forOpen.addEventListener('click', launchMenu);
// forClose.addEventListener('click', overMenu);