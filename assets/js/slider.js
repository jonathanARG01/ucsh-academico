$(document).ready(function() {
    
    
    const swiper_home = new Swiper('.swiper-home', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        }
    });


    const swiper_oferta = new Swiper(".swiper_oferta", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false
    });

    
    const swiper_oferta_thumbs = new Swiper(".swiper_oferta_thumbs", {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_oferta,
        }
    });


    $("#show").click(function() {
        var passwordInput = $("#inputPass");
        var passwordFieldType = passwordInput.attr("type");

        if (passwordFieldType === "password") {
            passwordInput.attr("type", "text");
        } else {
            passwordInput.attr("type", "password");
        }
    });


});
