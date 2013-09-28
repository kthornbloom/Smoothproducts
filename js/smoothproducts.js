$('.sp-wrap').append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>');
$('.sp-wrap a').appendTo('.sp-thumbs');
$('.sp-thumbs a:first').addClass('sp-current').clone().removeClass('sp-current').appendTo('.sp-large');
$('.sp-wrap').css('display', 'inline-block');
var slideTiming = 300

$('.sp-thumbs').live('click', function (event) {
    event.preventDefault();
});


$('.sp-tb-active a').live('click', function (event) {
    $('.sp-current').removeClass();
    $('.sp-thumbs').removeClass('sp-tb-active');

    var currentHeight = $('.sp-large').height();
    $('.sp-large').css({
        overflow: 'hidden',
        height: currentHeight + 'px'
    });

    $('.sp-large a').remove();
    $(this).addClass('sp-current').clone().hide().removeClass('sp-current').appendTo('.sp-large').fadeIn(slideTiming, function () {
        $('.sp-large').css('height', 'auto');
        var autoHeight = $('.sp-large').height();
        $('.sp-large').height(currentHeight).animate({
            height: autoHeight
        }, 'fast', function(){
            $('.sp-large').css('height', 'auto');
        });

        $('.sp-thumbs').addClass('sp-tb-active');
    });
    event.preventDefault();
});

$('.sp-large a').live('click', function (event) {
    var largeImg = $(this).attr('href');
    $('body').append('<div class="sp-modal"><div class="sp-modal-table"><div class="sp-modal-vcenter"><img src="' + largeImg + '"/></div></div></div>');
    $('.sp-modal').fadeIn();
    event.preventDefault();
});

$('.sp-modal').live('click', function (event) {
    $('.sp-modal').fadeOut(slideTiming, function () {
        $('.sp-modal').remove();
    });
    event.preventDefault();
});