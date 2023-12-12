$(function(){

    $('.hero_slider').slick({
        arrows: false,
        autoplay: true,
        fade:true,
        speed:1000,
        dots: true,
        appendDots: $(".slider_dots"),
        dotsClass: "hero_slider_dots"
    });
    $('.product_slider').slick({
        slidesToShow:4,
        autoplay:true,
        speed: 1000,
        prevArrow: '<i class="fa-solid fa-chevron-left product_slider_arrows"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right product_slider_arrows"></i>'
    });
    $('.deal_day_box_slider').slick({
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        speed:1000,
        dots: true,
        appendDots: $(".deal_slider_dots"),
        dotsClass: "deal_day_slider_dots"
    });
    $('.latest_news_slider').slick({
        slidesToShow:4,
        arrows: false,
        autoplay: true,
        speed:1000,
        dots: true,
        appendDots: $(".latest_slider_dots"),
        dotsClass: "latest_news_slider_dots"
    });

    // search section start ==================
    
    $('.search_open_btn').on('click', ()=>{
        $('#search').addClass('open');
    });
    $('.search_close_btn').on('click', ()=>{
        $('#search').removeClass('open');
    })

    // search section end ==================
    
    // Cart section start ==================
    
    $('.cart_open_btn').on('click', ()=>{
        $('#cart').addClass('open');
    })
    $('.cart_close_btn').on('click', ()=>{
        $('#cart').removeClass('open');
    })

    // Cart section end ==================
    
    // Popup section start ==================
    
    $('.popup_close_btn').on("click", ()=>{
        $('#popup').addClass('open')
    })

    // Popup section end ==================
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))