$(document).ready(function(){



	if (!Modernizr.svg) {
		// Swap out .svg image source with .png version
	    var imgs = document.getElementsByTagName('img');
	    var svgExtension = /.*\.svg$/
	    var l = imgs.length;
	    for(var i = 0; i < l; i++) {
	        if(imgs[i].src.match(svgExtension)) {
	            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
	            console.log(imgs[i].src);
	        }
	    }

	    // Also add in an image tag if the vivus javascript isn't going to work cause svg's aren't supported.
	   	$('[data-fallback]').each(function(){
	   		var imgSrc = $(this).data('fallback');
	   	 	$(this).append('<img src="'+imgSrc+'">');
	   	});

	    $('body').addClass('finished');


	} else {
	    /* Logo intro animation */
	    new Vivus('plau-logo', {
	    	type: 'async',
	    	duration: 120,
	    	file: 'img/plau-logo.svg',
	    	animTimingFunction: Vivus.EASE
	    }, function (obj) {
	    	obj.el.classList.add('finished');
	    	$('body').addClass('finished');
	    });
	    new Vivus('top-title', {
	    	type: 'async',
	    	duration: 120,
	    	file: 'img/gin-and-beer-house.svg',
	    	animTimingFunction: Vivus.EASE
	    }, function (obj) {
	    	obj.el.classList.add('finished');
	    });

	}


});

