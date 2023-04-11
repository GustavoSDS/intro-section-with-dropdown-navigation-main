'use strict'
const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const menuMobile = document.querySelector('#menuMobile');
const backgroundMobile = document.querySelector('.header__background');

const submenuFeacturesMobile = document.querySelector('#feactures-mobile');
const submenuCompanyMobile = document.querySelector('#company-mobile');
const submenuFeacturesDesktop = document.querySelector('#feactures-desktop');
const submenuCompanyDesktop = document.querySelector('#company-desktop');

const menuMobileFeactures = document.querySelector('#menuMobileFeactures');
const menuMobileCompany = document.querySelector('#menuMobileCompany');
const menuDesktopFeactures = document.querySelector('#menuDesktopFeactures');
const menuDesktopCompany = document.querySelector('#menuDesktopCompany');


btnOpenMenu.addEventListener('click', () => {
    setDisplay(menuMobile, 'block');
    setDisplay(btnCloseMenu, 'block');
    setDisplay(backgroundMobile, 'block');
    setDisplay(btnOpenMenu, 'none');
});
btnCloseMenu.addEventListener('click', () => {
    setDisplay(btnOpenMenu, 'block');
    setDisplay(menuMobile, 'none');
    setDisplay(btnCloseMenu, 'none');
    setDisplay(backgroundMobile, 'none');
});

menuMobileFeactures.addEventListener('click', () => {
    submenuFeacturesMobile.classList.toggle("display-none");
    submenuFeacturesMobile.classList.toggle("display-flex");
    menuMobileFeactures.classList.toggle('bg-arrow-up');
});

menuMobileCompany.addEventListener('click', () => {
    submenuCompanyMobile.classList.toggle("display-none");
    submenuCompanyMobile.classList.toggle("display-flex");
    menuMobileCompany.classList.toggle('bg-arrow-up');
});


menuDesktopFeactures.addEventListener('mouseover', () => {
    changeProperty(menuDesktopFeactures, submenuFeacturesDesktop, 'mouseover')
});

submenuFeacturesDesktop.addEventListener('mouseleave', () => {
    changeProperty(menuDesktopFeactures, submenuFeacturesDesktop, 'mouseleave')
});

menuDesktopCompany.addEventListener('mouseover', () => {
    changeProperty(menuDesktopCompany, submenuCompanyDesktop, 'mouseover')
});
submenuCompanyDesktop.addEventListener('mouseleave', () => {
    changeProperty(menuDesktopCompany, submenuCompanyDesktop, 'mouseleave')
});

function changeProperty(primary, secondary, event) {
    if (event == "mouseover") {
        addClassName(primary, 'bg-arrow-up');
        setDisplay(secondary, 'flex');
    } else {
        removeClassName(primary, 'bg-arrow-up');
        setDisplay(secondary, 'none');
    }
}















function setDisplay(element, valor) {
    element.style.display = `${valor}`
}
function addClassName(element, className) {
    element.classList.add(`${className}`)
}
function removeClassName(element, className) {
    element.classList.remove(`${className}`)
}