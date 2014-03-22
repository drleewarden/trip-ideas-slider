
(function($) {
    // init
    $(function () {
        // var
        var that = this,
            pathname = window.location.pathname;

        infoWindow();
        sliderPlugin();
        changeImg(pathname);

    });
    changeImg = function(pathname){// if url matches
        var xUrl = pathname.split( '/'),
            url = xUrl[xUrl.length-1],
            index = '1.jpeg',
            tripB = '2.jpeg',
            tripc = '3.jpeg';
        console.log(url);
        switch(url){
            case 'golf.html':
                var imgUrl = index;
                return
            default:
                var imgUrl = index;


        }
        $('.list-carousel').html('<img src="images'+imgUrl+'"/>');// swap image
    },
    sliderPlugin = function() {

        // Using custom configuration
        $(".image-slider").carouFredSel({

            scroll : {
                items: 1,
                duration: 9500,
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

           // $('.info_window').hide();
           // $('.img-title').hide();

        }

})(jQuery);