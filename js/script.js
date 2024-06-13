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

// MARQUEE POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
    // attribute value checker
    function attr(defaultVal, attrVal) {
      const defaultValType = typeof defaultVal;
      if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
      if (attrVal === "true" && defaultValType === "boolean") return true;
      if (attrVal === "false" && defaultValType === "boolean") return false;
      if (isNaN(attrVal) && defaultValType === "string") return attrVal;
      if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
      return defaultVal;
    }
    // marquee component
    $("[tr-marquee-element='component']").each(function (index) {
      let componentEl = $(this),
        panelEl = componentEl.find("[tr-marquee-element='panel']"),
        triggerHoverEl = componentEl.find("[tr-marquee-element='triggerhover']"),
        triggerClickEl = componentEl.find("[tr-marquee-element='triggerclick']");
      let speedSetting = attr(100, componentEl.attr("tr-marquee-speed")),
        verticalSetting = attr(false, componentEl.attr("tr-marquee-vertical")),
        reverseSetting = attr(false, componentEl.attr("tr-marquee-reverse")),
        scrollDirectionSetting = attr(false, componentEl.attr("tr-marquee-scrolldirection")),
        scrollScrubSetting = attr(false, componentEl.attr("tr-marquee-scrollscrub")),
        moveDistanceSetting = -100,
        timeScaleSetting = 1,
        pausedStateSetting = false;
      if (reverseSetting) moveDistanceSetting = 100;
      let marqueeTimeline = gsap.timeline({ repeat: -1, onReverseComplete: () => marqueeTimeline.progress(1) });
      if (verticalSetting) {
        speedSetting = panelEl.first().height() / speedSetting;
        marqueeTimeline.fromTo(panelEl, { yPercent: 0 }, { yPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
      } else {
        speedSetting = panelEl.first().width() / speedSetting;
        marqueeTimeline.fromTo(panelEl, { xPercent: 0 }, { xPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
      }
      let scrubObject = { value: 1 };
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (!pausedStateSetting) {
            if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
              timeScaleSetting = self.direction;
              marqueeTimeline.timeScale(self.direction);
            }
            if (scrollScrubSetting) {
              let v = self.getVelocity() * 0.006;
              v = gsap.utils.clamp(-60, 60, v);
              let scrubTimeline = gsap.timeline({ onUpdate: () => marqueeTimeline.timeScale(scrubObject.value) });
              scrubTimeline.fromTo(scrubObject, { value: v }, { value: timeScaleSetting, duration: 0.5 });
            }
          }
        }
      });
      function pauseMarquee(isPausing) {
        pausedStateSetting = isPausing;
        let pauseObject = { value: 1 };
        let pauseTimeline = gsap.timeline({ onUpdate: () => marqueeTimeline.timeScale(pauseObject.value) });
        if (isPausing) {
          pauseTimeline.fromTo(pauseObject, { value: timeScaleSetting }, { value: 0, duration: 0.5 });
          triggerClickEl.addClass("is-paused");
        } else {
          pauseTimeline.fromTo(pauseObject, { value: 0 }, { value: timeScaleSetting, duration: 0.5 });
          triggerClickEl.removeClass("is-paused");
        }
      }
      if (window.matchMedia("(pointer: fine)").matches) {
        triggerHoverEl.on("mouseenter", () => pauseMarquee(true));
        triggerHoverEl.on("mouseleave", () => pauseMarquee(false));
      }
    });
  });