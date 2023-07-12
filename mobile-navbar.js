class MobileNavBar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu, navList, navLinks);
        this.navList =  document.querySelector(navList)
        tihis.navLinks =  document.querySelectorAll(navLinks)
        this.activeClass = "active"
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log(heyy));
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