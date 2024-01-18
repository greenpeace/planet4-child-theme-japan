$(function () {

    $('.fade_item_bottom_to_top').on('inview', function(event, isInView) {
        if(isInView) {
                $(this).addClass('isshow');
        }
    });
});