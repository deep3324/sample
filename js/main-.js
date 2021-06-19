$(document).ready(function(){

    $('#filterOptions li a').click(function() { 
    var ourClass = $(this).attr('class');  
    $('#filterOptions li').removeClass('active'); 
    $(this).parent().addClass('active');

    if(ourClass == 'all') { 
      $('#ourStories').children('li.item').show();
    }
    else { 
      $('#ourStories').children('li:not(.' + ourClass + ')').hide(); 
      $('#ourStories').children('li.' + ourClass).show();
    }
    return false;
  });

    new WOW().init();

    $("#contactForm").validate();
	$("#panterApply").validate();
	$("#apply-now-forum").validate();
	$("#contact-forum").validate();
	$("#applyPosition").validate();

    $(".placeholder_txt .form_group span").click(function(){
        $(this).parent().addClass('normal_txt');
    });

    $('.placeholder_txt .form_group input').blur(function(event) {
        var inputValue = this.value;
        if (inputValue) {
            $(this).parent().addClass('normal_txt');
        } else {
            $(this).parent().removeClass('normal_txt');
        }
    });

    $('.videosslider').owlCarousel({
        loop:false,
        margin:18,
        nav:false,
        dots:true,
        mouseDrag: false,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                mouseDrag: true,
                touchDrag: true
            },
            600:{
                items:1,
                mouseDrag: true,
                touchDrag: true
            },
            1000:{
                items:3,
                mouseDrag: false,
                touchDrag: false
            }
        }
    });
	
	 $('.blogslider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		autoplay: false,
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
		responsive:{ 
			767:{
				nav: true,
				dots: true
			}
		}
	});
	

    $('.close_cookie, .acceptbtn').click(function(){
        $('.cookies').fadeOut();
    });

    // #mobile
    $(".menuic").click(function(){
      $(this).parent().parent().toggleClass('active');
      $(this).toggleClass('active');
      $('header').toggleClass('open');
    });
    // end// #mobile

    /*$(window).scroll(function () {
        console.log($(window).scrollTop());
    });*/

    // ***********************

    const box = document.querySelector('#Box-Wrapper');
    const box_wrapper = document.querySelector('#Box');
    const box_slides = box.querySelectorAll('.box_slide');
    const amount_box = box_slides.length;
    const controller_box = new window.ScrollMagic.Controller();
    const horizontalMovement_box = new window.TimelineMax();

    if ($(window).width() > 768) {
        horizontalMovement_box.add([window.TweenMax.to(box_wrapper, 1, { ease: Sine.easeIn, y: `-${100 / amount_box * (amount_box - 1)}%` })]);
        new window.ScrollMagic.Scene({
          triggerElement: box,
          triggerHook: 'onLeave',
          duration: 800 }).
        setPin(box).
        setTween(horizontalMovement_box).
        addTo(controller_box);
    }
    if ($(window).width() < 768) {
        horizontalMovement_box.add([window.TweenMax.to(box_wrapper, 1, { ease: Sine.easeIn, y: `-${100 / amount_box * (amount_box - 1)}%` })]);
        new window.ScrollMagic.Scene({
          triggerElement: box,
          triggerHook: 'onLeave',
          duration: 800 }).
        setPin(box).
        setTween(horizontalMovement_box).
        addTo(controller_box);
    }

    const controller1 = new window.ScrollMagic.Controller();


        // First
        first_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter", // show, when scrolled 10% into view
                            duration: 0,
                            offset: 700
                        })
                        .addTo(controller1);

        first_scene.on("enter", function (event) {
            $("#accorddiv-01").addClass("active");
            $("#circle-01").addClass("active");
            $(".imagesloans img").removeClass("active");
            $("#accord-img-01").addClass("active");
        });
        first_scene.on("progress", function (event) {
            console.log("First Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                $(".accorddiv").removeClass("active");
                $("#accorddiv-01").addClass("active");
            }
        });

        // Second
        second_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 800
                        })
                        .addTo(controller1);

        second_scene.on("enter", function (event) {
            $(".accorddiv, .imagesloans img, .circle, .semi_circle").removeClass("active");
            $("#accorddiv-02").addClass("active");
            $("#circle-02").addClass("active");
            $("#accord-img-02").addClass("active");
        });
        second_scene.on("progress", function (event) {
            console.log("Second Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                // alert("Second Before Call");
                $("#accorddiv-02").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-01, #circle-01, #accord-img-01").addClass("active");
            }
        });

        // Third
        third_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 900
                        })
                        .addTo(controller1);

        third_scene.on("enter", function (event) {
            $(".accorddiv, .imagesloans img, .circle, .semi_circle").removeClass("active");
            $("#accorddiv-03, #circle-03, #accord-img-03").addClass("active");
        });

        third_scene.on("progress", function (event) {
            console.log("Third Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                // alert("Third Before Call");
                $("#accorddiv-03").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-02, #circle-02, #accord-img-02").addClass("active");
            }
        });

        // Fourth
        fourth_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 1000
                        })
                        .addTo(controller1);

        fourth_scene.on("enter", function (event) {
            $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
            $("#accorddiv-04, #circle-04, #accord-img-04").addClass("active");
        });

        fourth_scene.on("progress", function (event) {
            console.log("Fourth Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-04, #circle-04, #accord-img-04").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-03, #circle-03, #accord-img-03").addClass("active");
            }
            /*if (event.scrollDirection == "FORWARD") {
                $("#accorddiv-05, #circle-05, #accord-img-05").addClass("active");
            }*/
        });
    

        // fifth
        fifth_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter", // show, when scrolled 10% into view
                            duration: 0,
                            offset: 1100
                        })
                        .addTo(controller1);

        fifth_scene.on("enter", function (event) {
            $("#accorddiv-05").addClass("active");
            $("#circle-05").addClass("active");
            $(".imagesloans img").removeClass("active");
            $("#accord-img-05").addClass("active");
        });
        fifth_scene.on("progress", function (event) {
            console.log("fifth Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                $(".accorddiv").removeClass("active");
                $("#accorddiv-05").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                // $("#accorddiv-04, #circle-04, #accord-img-04").addClass("active");
                $(".accordion").removeClass("second_section");
            }
            if (event.scrollDirection == "FORWARD") {
                $("#accorddiv-04, #circle-04, #accord-img-04").removeClass("active");
                $(".accordion").addClass("second_section");
            }            
        });

        // sixth
        sixth_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 1200
                        })
                        .addTo(controller1);

        sixth_scene.on("enter", function (event) {
            $(".accorddiv, .imagesloans img, .circle, .semi_circle").removeClass("active");
            $("#accorddiv-06").addClass("active");
            $("#circle-06").addClass("active");
            $("#accord-img-06").addClass("active");
        });
        sixth_scene.on("progress", function (event) {
            console.log("sixth Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                // alert("sixth Before Call");
                $("#accorddiv-06").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-05, #circle-05, #accord-img-05").addClass("active");
            }
        });

        // seventh
        seventh_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 1300
                        })
                        .addTo(controller1);

        seventh_scene.on("enter", function (event) {
            $(".accorddiv, .imagesloans img, .circle, .semi_circle").removeClass("active");
            $("#accorddiv-07, #circle-07, #accord-img-07").addClass("active");
        });

        seventh_scene.on("progress", function (event) {
            console.log("seventh Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                // alert("seventh Before Call");
                $("#accorddiv-07").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-06, #circle-06, #accord-img-06").addClass("active");
            }
        });

        // eigth
        eigth_scene = new ScrollMagic.Scene({
                            triggerElement: "#box-container",
                            triggerHook: "onEnter",
                            duration: 0,
                            offset: 1400
                        })
                        .addTo(controller1);

        eigth_scene.on("enter", function (event) {
            $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
            $("#accorddiv-08, #circle-08, #accord-img-08").addClass("active");
        });

        eigth_scene.on("progress", function (event) {
            console.log("eigth Scene progress changed to " + event.scrollDirection);
            if (event.state == "BEFORE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-08, #circle-08, #accord-img-08").addClass("active");
            }
            if (event.scrollDirection == "REVERSE") {
                $(".accorddiv, .circle, .semi_circle, .imagesloans img").removeClass("active");
                $("#accorddiv-07, #circle-07, #accord-img-07").addClass("active");
            }
        });


// ************************* // 

    if ($(window).width() > 768) {
        skrollr.init({ speed: 10000 });
    }
	 
	 
	 	
		
	 


});



 $(document).ready(function() {
  
});

 