$(document).ready(function($) {
    $('#btn').click(function() {
        $('.products-list__fade').fadeIn();
        return false;
    });

    $('.popup__close').click(function() {
        $(this).parents('.products-list__fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.products-list__fade').fadeOut();
        }
    });

    $('.products-list__fade').click(function(e) {
        if ($(e.target).closest('.products-list__popup').length == 0) {
            $(this).fadeOut();
        }
    });
    $("#tel").mask("+375 (99) 999 99-99");
    // $("#tel").mask("8(999) 999-9999");
});