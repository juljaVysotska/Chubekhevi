$('.rotator-wrapp').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true
            }
        },

    ]
});


$(window).scroll(() => {
    $('nav').addClass('white');
    $('nav').css('background-color', '');
    $('nav').removeClass('transparent');
    $('nav').css('position', 'absolute');

    if ($(window).scrollTop() >= 1200) {
        $('nav').addClass('white');
        $('nav').css('background-color', 'white');
        $('nav').removeClass('transparent');
        $('nav').css({
            'position': 'fixed',
            'top': 0,
            'transition': '.3s all ease-in-out'
        });
    }
});