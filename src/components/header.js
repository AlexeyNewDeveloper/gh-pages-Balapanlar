

export class Header {
    constructor({header}) {
        this.header = header;
        this.headerLogo = this.header.querySelector('.logo');
        this.menuToggle = this.header.querySelector('.header__menu-toggle');
        this.menuButton = this.header.querySelector('.header__menu-button');
        this.headerLogoContainer = this.header.querySelector('.header__logo-container');
        this.headerMenuLinks = this.header.querySelector('.header__menu-links');
        this.headerMenuLinksItem = this.header.querySelector('.header__menu-links-item');
        this.scrollFlag = false;
        this.currentScrollY = 0;
    }

    _closeMenuHamburger() {
        this.menuToggle.checked = false;
        this.headerLogo.classList.remove('logo_open-menu-image');
        this.header.classList.remove('header_open-menu');
        this.header.classList.remove('logo_second-image');
        this.headerLogoContainer.classList.remove('header__logo-container_position_center');
    }

    _enableChangeHeaderByScroll() {
        window.addEventListener('scroll', this._enableChangeHeaderByScrollCallback.bind(this));
    }

    _enableChangeHeaderByScrollCallback() {


        let diffScroll = scrollY - this.currentScrollY;
        this.currentScrollY = scrollY;

        if(scrollY > 0 && !this.menuToggle.checked) {
            if(parseInt(window.getComputedStyle(this.header).blockSize) > 80) {
                this.header.classList.add('header_scroll');
            }
            this.headerLogo.classList.add('logo_second-image');
            this.scrollFlag = true;
        } else {
            if(this.header.classList.contains('header_scroll')) {
                this.header.classList.remove('header_scroll');
            }
            this.headerLogo.classList.remove('logo_second-image');
            this.scrollFlag = false;
        }


        if(this.menuToggle.checked
            && diffScroll > 35
            || diffScroll < -35) {
            this._closeMenuHamburger();
        }
    }


    _trackWindowSize() {
        window.addEventListener('resize', () => {
            if(window.matchMedia('(max-width: 1110px)').matches 
            && this.menuToggle.checked) {
                this.headerLogoContainer.classList.add('header__logo-container_position_center');
                this.headerLogo.classList.add('logo_open-menu-image');
            } else if(window.matchMedia('(min-width: 1110px)').matches 
            && this.menuToggle.checked){
                this.headerLogoContainer.classList.remove('header__logo-container_position_center');
                this.headerLogo.classList.remove('logo_open-menu-image');
            }
    
            if(window.matchMedia('(min-width: 1110px)').matches
            && this.menuToggle.checked) {
                this._closeMenuHamburger();
            }
    
        });
    }

    _addListenerForMenuButton() {

        this.menuButton.addEventListener('click', () => {

            // Если экран < 1110px и меню открыто
            if (window.matchMedia('(max-width: 1110px)').matches
            && !this.menuToggle.checked) {
                this.headerLogoContainer.classList.add('header__logo-container_position_center');
                this.headerLogo.classList.add('logo_open-menu-image');
                this.header.classList.add('header_open-menu');


                // Если был скролл
                if (this.scrollFlag) {
                    this.header.classList.remove('header_scroll');
                    this.headerLogo.classList.remove('logo_second-image');
                }
                // Если экран < 1110px и меню закрыто
            } else if (window.matchMedia('(max-width: 1110px)').matches
            && this.menuToggle.checked) {
                this.headerLogoContainer.classList.remove('header__logo-container_position_center');
                this.headerLogo.classList.remove('logo_open-menu-image');
                this.header.classList.remove('header_open-menu');


                // Если был скролл
                if (this.scrollFlag) {
                    this.header.classList.add('header_scroll');
                    this.headerLogo.classList.add('logo_second-image');
                }
                // Если экран > 1110px и меню открыто
            } else if (window.matchMedia('(min-width: 1110px)').matches 
            && !this.menuToggle.checked) {
                this.header.classList.add('header_open-menu');

                // Если был скролл
                if (this.scrollFlag) {
                    this.header.classList.remove('header_scroll');
                    this.headerLogo.classList.remove('logo_second-image');
                }
                // Если экран > 1110px и меню закрыто
            } else if (window.matchMedia('(min-width: 1110px)').matches 
            && this.menuToggle.checked) {
                this.header.classList.remove('header_open-menu');

                // Если был скролл
                if (this.scrollFlag) {
                    this.header.classList.add('header_scroll');
                    this.headerLogo.classList.add('logo_second-image');
                }
            }
    
        })
    }

    enableHeader() {
        this._enableChangeHeaderByScroll();
        this._trackWindowSize();
        this._addListenerForMenuButton();
    }
}

