
$('.rotator').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

$(document).ready(function() {
    let i = 0;
    $('.card').each((el) => {
        $($('.card')[i]).css('animation-delay', `${i/5}s`);
        i++;
    });
});