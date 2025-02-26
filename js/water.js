 	// Show/Hide Sticky "Go top" button
	$(window).scroll(function(){
		"use strict";
		if($(this).scrollTop()>200){
			$(".go-top").fadeIn(200);
		}
		else{
			$(".go-top").fadeOut(200);	
		}
	});
	
	// Scroll Page to Top when clicked on "go top" button
	$(".go-top").click(function(event){
		"use strict";
		event.preventDefault();

		$.scrollTo('#headerSection', 1500, {
        	easing: 'easeOutCubic'
        });
	});
	


$(function(){
    "use strict";
	var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    
    if (!mobile){
        jQuery('#water-line_grey').raindrops({color:'#808080',canvasHeight:20});
        jQuery('#water-line_sky-light').raindrops({color:'#87CEEB',canvasHeight:20});
        jQuery('#water-line_water').raindrops();
        jQuery('#water-line_blue2').raindrops({color:'#223774',canvasHeight:20});
        jQuery('#water-line_green2').raindrops({color:'#226412', waveLength: 700,waveHeight: 30});
        jQuery('#water-line_red2').raindrops({color:'#a71f2a', density: 0.1, frequency: 20});
        jQuery('#water-line_white').raindrops({color:'#f9f0d8', canvasHeight:10, waveLength: 100, rippleSpeed: 0.05, density: 0.04});
        jQuery('#water-line_yellow').raindrops({color:'#ffef92', canvasHeight:10, rippleSpeed: 0.01, frequency: 1, density: 0});
		jQuery('#water-line_sky').raindrops({color:'#00BFFF', canvasHeight:10, rippleSpeed: 0.01, frequency: 1, density: 0});
		jQuery('#water-line_blue-light').raindrops({color:'#4682B4', canvasHeight:10, rippleSpeed: 0.02, frequency: 1, density: 0.08});
		jQuery('#water-line_blue1').raindrops({color:'#31708f', canvasHeight:10, waveLength: 60, rippleSpeed: 0.02, density: 0.1});
		jQuery('#water-line_red1').raindrops({color:'#F74043', canvasHeight:10, rippleSpeed: 0.02, frequency: 5, density: 0.05});
		jQuery('#water-line_green1').raindrops({color:'#56D748', canvasHeight:10, rippleSpeed: 0.03, frequency: 3, density: 0.02});
		
            jQuery('#examples .thumbnail').click(function(e){
                if (e.target.tagName!=="CODE"){
                    jQuery(this).children('.blockDtl').toggleClass('active');
                }
            });
    } else{
        jQuery('#download').raindrops({color:'#b5d5e1',canvasHeight:100});
    }
});





















