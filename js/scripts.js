$('.btn-hotel').click(function () {
    $('.hotel-direct').hide();
    $('.see-more-hotel').show();
});

$('.closed-hotel').click(function () {
    $('.hotel-direct').show();
    $('.see-more-hotel').hide();
});

$('.btn-ota').click(function () {
    $('.ota-direct').hide();
    $('.see-more-ota').show();
});

$('.closed-ota').click(function () {
    $('.ota-direct').show();
    $('.see-more-ota').hide();
});

$('.btn-direct').click(function () {
    $('.tech-direct').hide();
    $('.see-more-tech').show();
});

$('.closed-tech').click(function () {
    $('.tech-direct').show();
    $('.see-more-tech').hide();
});