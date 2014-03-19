
(function($) {
    // init
    $(function () {
        infoWindow();
        sliderPlugin();

    });

    sliderPlugin = function() {

        // Using custom configuration
        $(".image-slider").carouFredSel({

            scroll : {
                items: 1,
                duration: 1500,
                easing: 'swing'
            },
            prev: {
                button: '#slideshow_prev'
            },
            next: {
                button: '#slideshow_next'
            },
            width: '100%',
            items: {
                //width: 990,
                start: 1,
                visible: {
                    min: 3,
                    max: 6
                }
            }
        });
    },
        infoWindow = function(){

            //$('.info_window').hide();
           // $('.img-title').hide();

        }

})(jQuery);