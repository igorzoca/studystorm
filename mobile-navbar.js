class MobileNavBar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu, navList, navLinks);
        this.navList =  document.querySelector(navList)
        tihis.navLinks =  document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = " ")
            : (link.style.animation = 'navLinkFade 0.5s case forwards 0.3s');
        });
    }

    handleClick() {
        console.log(this)
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
); 
MobileNavBar.init();