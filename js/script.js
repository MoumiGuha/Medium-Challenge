$(document).ready(function () {
    $('.search-icon').click(function () {

        $('#search-text').toggle(250);
    });

    $('#titleInput').click(function(){
        var heightFromTop = $('#titleInput').position().top + 50;
        $('#media-icon').css('top', heightFromTop);
    });

    $('#write').click(function(){
        var heightFromTop = $('#write').position().top + 7;
        $('#media-icon').css('top', heightFromTop);
    });
});