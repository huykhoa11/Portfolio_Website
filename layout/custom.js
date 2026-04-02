/* AOS.init();  */
$(document).ready(function(){
    $(".thumb-1").click(function(){
        // Change src attribute of image
        $(".big-img").attr("src", "images/img1.png");
    });

    $(".thumb-2").click(function(){
        // Change src attribute of image
        $(".big-img").attr("src", "images/img2.png");
    });

    $(".thumb-3").click(function(){
        // Change src attribute of image
        $(".big-img").attr("src", "images/img3.png");
    }); 


    $(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 350) {
		  $(".nav").css("background" , "black");
		}
	});


	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100) { 
		//   $(".bar").css("box-shadow" , "0 4px 2px -2px gray");
		//   $(".bar").css("transition" , "0.25s");
		}
  
		else{
			// $(".bar").css("box-shadow" , "none");
			// $(".bar").css("transition" , "0s");	
		}
	}); 


    // Mobile browsers may trigger `resize` while scrolling (address bar UI changes),
    // which can cause the menu button to visually "jump".
    // Debounce + only update when the breakpoint mode changes.
    function applyNavMode() {
        var w = $(window).width();
        var isMobile = w <= 1050;

        $(".sidenav").css("width", "0%");
        $(".closebtn").css("display", "none");

        if (isMobile) {
            $(".menu-btn").css("display", "block");
            $(".list").css("display", "none");
        } else {
            $(".menu-btn").css("display", "none");
            $(".list").css("display", "flex");
        }

        return isMobile;
    }

    var lastMobileMode = applyNavMode();
    var resizeTimer;

	$(window).on("resize", function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            var nextMobileMode = $(window).width() <= 1050;
            if (nextMobileMode !== lastMobileMode) {
                lastMobileMode = applyNavMode();
            }
        }, 120);
    });

	$ (".list-btn").click(function(){
        // Change src attribute of image
        $(".sidenav").css({"width": "100%"});
		 $(".closebtn").css("display", "block");
		 $(".menu-btn").css("display", "none");
		 
    });

	 $(".closebtn").click(function(){
        // Change src attribute of image
        $(".sidenav").css("width", "0%");
		$(".closebtn").css("display", "none");
		$(".menu-btn").css("display", "block");
	}); 



	// Khi nhấn nút mở Menu
	$(".list-btn").click(function(){
		$(".sidenav").css("width", "100%");
		$(".closebtn").css("display", "block");
		$(".menu-btn").css("display", "none");
		
		$("body").addClass("stop-scrolling");
	});

	// Khi nhấn nút đóng Menu
	$(".closebtn").click(function(){
		$(".sidenav").css("width", "0%");
		$(".closebtn").css("display", "none");
		$(".menu-btn").css("display", "block");
		
		$("body").removeClass("stop-scrolling");
	});

    
});


$(function(){

	var intervalId;
	setTimer();

	function setTimer() {
		intervalId = setInterval(autoClick, 2000);
	}

	function autoClick() {
		$(".slide").children("a.next").click();
	}

	function changeImages($click) {
		//console.log($click)
		var $current = $click.siblings(".container").children(".current");
		var $new;
		var findSelector = "";

		if($click.hasClass("next")) {
			$new = $current.next();
			findSelector = ":first-child";
		}
		else {
			$new = $current.prev();
			findSelector = ":last-child";
		}

		if($new.length == 0) {
			$new = $current.siblings(findSelector);
		}
		$current.removeClass("current");
		$new.addClass("current");
		setTimer();
	}

	$(".slide").on("click", "> a", function(event){
		event.preventDefault();
		clearInterval(intervalId);
		changeImages($(this));
	})

});