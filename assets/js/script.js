
$('.slide-items').slick({
dots: false,
infinite: false,
autoplay: true,
slidesToShow: 6,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1155,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 481,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});


$('.dot-slide-item').slick({
dots: true,
autoplay: true,
infinite: false,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1155,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: true
}
},

{
breakpoint: 993,
settings: {
slidesToShow: 3,
slidesToScroll: 1
}
},


{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});

$('.image-slide-items').slick({
dots: true,
autoplay: true,
infinite: false,
slidesToShow: 6,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});





$('.left-slider').slick({
infinite: true,
autoplay: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1
});



$('.right-slider').slick({
infinite: true,
autoplay: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1
});


