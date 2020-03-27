$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function (event) {
        event.preventDefault();
        $('.tabs-item-active').removeClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');

        $('.visible').removeClass('visible');
        let activeContent = $(this).attr('href');
        $(activeContent).toggleClass('visible');

    });

});
