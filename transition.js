$('ul.mainNav li a').on('click', function() {
    $('ul.mainNav li a').parent().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('id');
    var wrapper = $('#wrapper-' + id);

    $('.body').removeClass('active');
    $(wrapper).addClass('active');
});
