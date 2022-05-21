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
		if (scroll > 350) { 		/* && ($(window).width() >= 1201)) */
		  $(".nav").css("background" , "black");
		}
  
/* 		else{
			$(".navbar").css("background" , "transparent");  	
		} */
	});


	/* var count = 0;
    $(window).on("resize", function(){
        var $nav = $("ul");
        var listFloat = $(".menu-btn").css("display");
        if(listFloat == "none"){
            $nav.css("display", "flex");
            $(".list-btn").attr("src", "images/delete.png");
        }
        else {
            $nav.css("display", "none");
            $(".list-btn").attr("src", "https://img.icons8.com/ios/50/000000/menu--v3.png");
            count = 0;
        }
    });

	$(".list-btn").click(function(){
        // Change src attribute of image
        count += 1;
        var $nav = $("ul");
        var listFloat = $(".menu-btn").css("display");
        $(".list").css("width", "100%");
        if(count % 2 == 1){
            $(".list-btn").attr("src", "images/delete.png");
            console.log("hello");
            $("ul").css("display", "flex");           
        }
        else {
            $(".list-btn").attr("src", "https://img.icons8.com/ios/50/000000/menu--v3.png");

        }
    });  */
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100) { 
		  $(".bar").css("box-shadow" , "0 4px 2px -2px gray");
		  $(".bar").css("transition" , "0.25s");
		}
  
		else{
			$(".bar").css("box-shadow" , "none");
			$(".bar").css("transition" , "0s");	
		}
	}); 


	if($(window).width() > 991) {
		$(".sidenav").css("width", "0%");
		$(".menu-btn").css("display", "none");
		$(".closebtn").css("display", "none");
		$(".list").css("display", "flex");
	}
	if($(window).width() <= 1050) {
		$(".sidenav").css("width", "0%");
		$(".menu-btn").css("display", "block");
		$(".closebtn").css("display", "none");
		$(".list").css("display", "none");
	}

	$(window).on("resize", function(){
        if($(window).width() > 991) {
			$(".sidenav").css("width", "0%");
			$(".menu-btn").css("display", "none");
			$(".closebtn").css("display", "none");
			$(".list").css("display", "flex");
		}
		if($(window).width() <= 1050) {
			$(".sidenav").css("width", "0%");
			$(".menu-btn").css("display", "block");
			$(".closebtn").css("display", "none");
			$(".list").css("display", "none");
		}
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
		$(".menu-btn").css("display", "block");
		$(".closebtn").css("display", "none");
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
