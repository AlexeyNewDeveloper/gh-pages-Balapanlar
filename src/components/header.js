const header = document.querySelector(".header");
const headerLogo = header.querySelector(".logo");
const headerMenuLinks = header.querySelector('.header__menu-links');
const headerLogoInitialImage = headerLogo.src;



export function enableChangeHeaderByScroll({newImage}) {
    window.addEventListener('scroll', enableChangeHeaderByScrollCallback.bind(null, {newImage: newImage}))
}

function enableChangeHeaderByScrollCallback({newImage}) {
    if(scrollY > 15) {
        headerMenuLinks.classList.add('header__menu-links_scroll');
        header.classList.add("header_scroll");
        headerLogo.classList.add("logo_second-image");
        headerLogo.src = newImage;
    } else {
        headerMenuLinks.classList.remove('header__menu-links_scroll');
        header.classList.remove("header_scroll");
        headerLogo.classList.remove("logo_second-image");
        headerLogo.src = headerLogoInitialImage;
    }
}