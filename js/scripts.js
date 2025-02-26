$(document).ready(function(){	

/***************************************************
	MENU
***************************************************/
	"use strict";
	jQuery('ul.nav li.dropdown').hover(function(){		
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function (){
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

/***************************************************
		TOOLTIP & POPOVER
***************************************************/
$("[rel=tooltip]").tooltip();
$("[data-rel=tooltip]").tooltip();

/***************************************************
		CAROUSEL - STOP AUTO CYCLE
***************************************************/
 $('.carousel').carousel({
    interval: false});

/***************************************************
		HOVERS
***************************************************/
	$(".hover_img, .hover_colour, .hover_block").on('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.1},500);
		}
	);
	$(".hover_img, .hover_colour, .hover_block").on('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},800);
		}
	);
	
/***************************************************
		BACK TO TOP LINK
***************************************************/
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			});
		});	

/***************************************************
	IFRAME
***************************************************/
	$("iframe").each(function(){
		"use strict";
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') !== -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else {$(this).attr('src',ifr_source+'?'+wmode);}
	});
	

/***************************************************
	ANIMATIONS
***************************************************/

$(function() { 	
"use strict";
$('.welcome').show().addClass("animated fadeInDown");
$('.welcome_index').show().addClass("animated fadeInDown");
$('.intro_sections h6').show().addClass("animated fadeInUp");
$('.fadeinup').show().addClass("animated fadeInUp");
$('.fadeindown').show().addClass("animated fadeInDown");
}); 

/***************************************************
		PRETTYPHOTO
***************************************************/
$('a[data-rel]').each(function() {
	"use strict";
$(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
});
$("a[rel^='prettyPhoto']").prettyPhoto();
	jQuery("a[rel^='prettyPhoto'], a[rel^='lightbox']").prettyPhoto({
overlay_gallery: false, social_tools: false,  deeplinking: false
});

/***************************************************
	windmill
***************************************************/

$(function() {
	"use strict";
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']|| window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
	}
 
    if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
	}
}());

/***************************************************
     橫式手風琴 Horizontal_accordion  (h_acdn)

	$(".h_acdn ul li").each(function(){
		"use strict";
		var h_acdn_title = $(this).find(".h_acdn_title");
		//var h-acdn_body = $(this).find(".h-acdn_body");
		if(h_acdn_title.is(":hidden")){
			$(this).width(90%);
		}else{
			$(this).width(100);
		}
	});

	$(".h_acdn ul li").click(function(){
		"use strict";
		//var li_index = $(this).index();
		$(this).animate({width:680},200);
		$(this).find(".h-acdn_body").show();
		$(this).find(".h-acdn_title").hide();
		$(this).siblings().animate({width:100},200);
		$(this).siblings().find(".h-acdn_body").hide();
		$(this).siblings().find(".h-acdn_title").show();
	});

***************************************************/	


