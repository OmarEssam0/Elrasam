    let navBtn = document.getElementById("nav-btn"),
        icon = document.getElementById("icon"),
        close = document.getElementsByClassName("fa-xmark"),
        showNav = document.getElementById("navClick"),
        prod = document.getElementById("prod"),
        Brands = document.querySelectorAll(".Brands"),
        navbarMobile = document.querySelector(".navbar-mobile");
    function changeIconBtn() {
        icon.className.includes("fa-bars-staggered") ? icon.classList.replace("fa-bars-staggered", "fa-xmark") : icon.classList.replace("fa-xmark", "fa-bars-staggered");
    }
    function showLinks() {
        icon.className.includes("fa-xmark") ? showNav.classList.replace("d-none", "d-block") : showNav.classList.replace("d-block", "d-none");
    }
    navBtn.addEventListener("click", function () {
        changeIconBtn(), showLinks();
    }),
        prod.addEventListener("mouseover", function () {
            document.getElementById("product").classList.remove("d-none");
        });
    for (let i = 0; i < Brands.length; i++)
        Brands[i].addEventListener("click", function () {
            document.getElementById("cars").classList.toggle("d-none");
        });

        document.querySelector(".nav-bt-mobile").addEventListener("click" , function(){
            navbarMobile.classList.replace("d-none" , "d-block")
        })
        document.querySelector(".fa-xmark").addEventListener("click" , function(){
            navbarMobile.classList.replace("d-block" , "d-none")

        })
$(document).ready(function () {
    $(".your-slider").slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2e3, dots: !0, fade: !0, cssEase: "linear", rtl: !0, arrows: !1 });
});
new WOW().init();