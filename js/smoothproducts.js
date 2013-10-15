// Add some markup & set some CSS
$('.sp-wrap').append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>');
$('.sp-wrap a').appendTo('.sp-thumbs');
$('.sp-thumbs a:first').addClass('sp-current').clone().removeClass('sp-current').appendTo('.sp-large');
$('.sp-wrap').css('display', 'inline-block');
var slideTiming = 300
var maxWidth = $('.sp-large img').width();

// Prevent clicking while things are happening
$('.sp-thumbs').live('click', function (event) {
    event.preventDefault();
});

// Clicking a thumbnail
$('.sp-tb-active a').live('click', function (event) {
    $('.sp-current').removeClass();
    $('.sp-thumbs').removeClass('sp-tb-active');
    $('.sp-zoom').remove();

    var currentHeight = $('.sp-large').height();
    $('.sp-large').css({
        overflow: 'hidden',
        height: currentHeight + 'px'
    });

    $('.sp-large a').remove();
    $(this).addClass('sp-current').clone().hide().removeClass('sp-current').appendTo('.sp-large').fadeIn(slideTiming, function () {
        var autoHeight = $('.sp-large img').height();
        $('.sp-large').height(currentHeight).animate({
            height: autoHeight
        }, 'fast', function () {
            $('.sp-large').css('height', 'auto');
        });

        $('.sp-thumbs').addClass('sp-tb-active');
    });
    event.preventDefault();
});

// Zoom In
$('.sp-large a').live('click', function (event) {
    var largeUrl = $(this).attr('href');
    $('.sp-large').append('<div class="sp-zoom"><img src="' + largeUrl + '"/></div>');
    $('.sp-zoom').fadeIn();
    $('.sp-large').css({
        left: 0,
        top: 0
    })
    
    event.preventDefault();
});

// Panning zoomed image
$(document).ready(function () {
    $('.sp-large').mousemove(function (e) {
        var viewWidth = $('.sp-large').width();
        var viewHeight = $('.sp-large').height();
        var largeWidth = $('.sp-zoom').width();
        var largeHeight = $('.sp-zoom').height();
        var parentOffset = $(this).parent().offset();
        var relativeXPosition = (e.pageX - parentOffset.left);
        var relativeYPosition = (e.pageY - parentOffset.top);
        var moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth));
        var moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));

        $('.sp-zoom').css({
            left: moveX,
            top: moveY
        });

    }).mouseout(function () {
        //
    });
});

// Zoom out
$('.sp-zoom').live('click', function (event) {
    $(this).fadeOut(function () {
        $(this).remove();
    });
});