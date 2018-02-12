$(document).ready(function() {

	$('.popup').magnificPopup({type:'image'});

	$('.top_texp h1').addClass('fadeInDown');

	$('.top_texp p').addClass('fadeInUp');

	$('.sect_header').addClass('fadeInUp');

	$('.sect_header').addClass('fadeInUp');

	$('.animation_2').addClass('flipInY infinite');

	$('.animation_1').addClass('fadeInLeft');

	$('.animation_3').addClass('fadeInRight');


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");

		};
	});

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//$(".top_texp h1").animated("fadeInDown", "fadeOutUp");
	//$(".top_texp p").animated("fadeInUp", "fadeOutDown");

});

