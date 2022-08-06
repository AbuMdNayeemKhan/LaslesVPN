//==========Javascript for nav section start=========//
let togoller = document.querySelector(".navbar-nav-toggler");
let navMenu = document.querySelector(".navbar-nav-menu");
let navbarNavInOut = document.querySelector(".navbar-nav-inOut");
togoller.addEventListener("click", () => {
    togoller.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbarNavInOut.classList.toggle("active");
});

document.querySelectorAll(".navbar-nav-menu-link").forEach(n => n.addEventListener("click", () => {
    togoller.classList.remove("active");
    navMenu.classList.remove("active");
    navbarNavInOut.classList.remove("active");
}))

navbarNavInOut.addEventListener("click", () =>{
    togoller.classList.remove("active");
    navMenu.classList.remove("active");
    navbarNavInOut.classList.remove("active");
});
//==========Navbar section  script end here==========//

//==========Script for Owl Carousel start==========//
let nextBTN = '<i class="fa-solid fa-arrow-right"></i>';
let prevBTN = '<i class="fa-solid fa-arrow-left"></i>';
$('.review-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    navText:[prevBTN, nextBTN],
    dots:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
//==========Script for Owl Carousel end==========//