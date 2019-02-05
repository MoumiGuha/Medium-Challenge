$(document).ready(function () {
    $('.search-icon').click(function() {
        if($('.search-medium').css('display') == 'none'){
            $('.search-medium').css('display', 'inline-block');
        }
        else {
            $('.search-medium').css('display', 'none');
        }
        
        
    });
});