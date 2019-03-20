$(function () {
    var docao = $(window).height();
    $('.giua1').css({ 'height': docao });
    $(window).resize(function () {
        var docao = $(window).height();
        $('.giua1').css({ 'height': docao })
    });
});
