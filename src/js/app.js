//Site object
const site = {
    elements: {
        hamburger: document.querySelector(".hamburger"),
        deskNav: document.querySelector(".nav-links"),
        mobileNav: document.querySelector(".mobile__nav-links"),
        mobileLinks: document.querySelectorAll(".mobile__nav-link")
    }
}
//Hamburger and navbar functionality
function toggleActive() {
    //Toggle active class
    site.elements.hamburger.classList.toggle("active");
    //Check if active
    if(site.elements.hamburger.classList.contains("active")) {
        //If yes set height to 100vh
        site.elements.mobileNav.style.height = "100vh";
    } else {
        //If no set height back to 0
        site.elements.mobileNav.style.height = "0";
    }
}

//Function for when screen is resized
function screenResize() {
    if(window.innerWidth > 900) {
        site.elements.mobileNav.style.height = "0";
        site.elements.hamburger.classList.remove("active");
        site.elements.deskNav.style.display = "flex";
    } else {
        site.elements.deskNav.style.display = "none";
    }
}

//Event listeners
site.elements.hamburger.onclick = toggleActive;
site.elements.mobileLinks.forEach(link => {
    link.onclick = toggleActive;
});
window.addEventListener("resize", screenResize);