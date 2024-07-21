$(function() {
    if('swiper-slide-type1'.length > 0 ){
        var swiper = new Swiper(".swiper-slide-type1", {
            observer: true,
			observeParents: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});