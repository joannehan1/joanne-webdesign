
$(document).mousemove(function(e) {
            $('.fork').offset({
        left: e.pageX,
        top: e.pageY + 05
                });
            });
$(document).ready(function() {
    $('.product').draggable();
    $('.product').click(function() {
    $(this).fadeOut('fast');
                    });
                });
