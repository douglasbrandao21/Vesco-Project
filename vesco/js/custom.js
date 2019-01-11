/*=============================================================
                            SERVICES   
=============================================================*/

$(function () {
    //animate on scroll
    new WOW().init();
});

/*=============================================================
                            MAGNIFIC  
=============================================================*/

$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            $("nav").removeClass("navbar-vesco-top");
        }
        else{
           $("nav").addClass("navbar-vesco-top");
        }  
    })
});






document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
  anchor.addEventListener("click", function (ev) {
    ev.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
        block: "start",
        alignToTop: true,
        behavior: "smooth"
    });
  });
});




