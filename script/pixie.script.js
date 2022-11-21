$(document).ready(function() {
    $('#web-logo').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 6
            }
        }
    });

    $('#service').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3
            }
        }
    })
});