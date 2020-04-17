
'use strict';

(function ($) {

    $(document).ready(function() {
        $(".see").click(function() {
            $(this).prev().toggle();
            if($(this).text() == 'See more') {
                $(this).text('See less');
            } else {
                $(this).text('See more');
            }
        });
    });

})(jQuery);