$(document).ready(function() {
    
    wow = new WOW({
        boxClass: 'animate',
        animateClass: 'animated',
        offset: 150,
        mobile: true,
    });
    wow.init();
    

    $("body").css("overflow", "hidden");
    
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){
            $(this).remove();
            $("body").css("overflow", "auto");
        });
    });
    
        
    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top, 
        }, 700);
    });
    
    
    $( '#ri-grid' ).gridrotator( {
        rows : 4,
        columns : 4,
        slideshow : true,
        maxStep : 1,
        interval : 1500,
        animType : 'rotateTop',
        animSpeed : 750,
        preventClick : true,
        nochange : static_mobile,
        w1024 : {
            rows : 4,
            columns : 4
        },
        w768 : {
            rows : 4,
            columns : 4
        },
        w480 : {
            rows : 3,
            columns : 3
        },
        w320 : {
            rows : 1,
            columns : 1
        },
        w240 : {
            rows : 2,
            columns : 2
        }
    } );

    
    $( '#ri-grid-mobile' ).gridrotator( {
        rows : 3,
        columns : 3,
        slideshow : true,
        maxStep : 1,
        interval : 2000,
        animType : 'rotateTop',
        animSpeed : 500,
        preventClick : true,
        nochange : static_mobile,
        w1024 : {
            rows : 3,
            columns : 3
        },
        w768 : {
            rows : 3,
            columns : 3
        },
        w480 : {
            rows : 3,
            columns : 3
        },
        w320 : {
            rows : 3,
            columns : 3
        },
        w240 : {
            rows : 3,
            columns : 3
        }
    } );
    
    
    // Old scroll
    /*
        $('.nav a').click(function(){
        $('body').scrollTo('#'+$(this).attr('rel'),{duration:2000});
    });
    */
    
    // Mobile Menu
    
    /*
    
    var controller = new slidebars();

    controller.init();
    
    $( '.open-menu' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'mobile-menu' );
        $('[canvas="site"]').css({"cursor": "pointer"});
    });
    
    $( 'body' ).on( 'click', '[canvas="site"]', function ( event ){
        event.stopPropagation();
        controller.close();
        $('[canvas="site"]').css({"cursor": "default"});
    });
    
    
    
    
     $( '#ri-grid' ).gridrotator( {
            rows : 4,
            columns : 4,
            slideshow : true,
            maxStep : 1,
            interval : 3500,
            animType : 'rotateTop',
            animSpeed : 750,
            preventClick : true,
            nochange : [3,5,6,7,8,12,14,15],
            w1024 : {
                rows : 4,
                columns : 4
            },
            w768 : {
                rows : 4,
                columns : 4
            },
            w480 : {
                rows : 3,
                columns : 3
            },
            w320 : {
                rows : 1,
                columns : 1
            },
            w240 : {
                rows : 2,
                columns : 2
            }
        } );

    
    
    
    
    
    */
    
});