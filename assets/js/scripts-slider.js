(function($){
   	
   	// Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
    }); 

	$(document).ready(function() {
		
		// Slider background
		
		$.vegas('slideshow', {
		  backgrounds:[
			{ src:'assets/images/bg9.jpg'},
		
		  ]
		})('overlay', {
		  src:'assets/images/06.png'
		});		

				


		// Tooltips
		$('.more-links a, .social a').tooltip();
	
		$('.more-links a, .social a').on('click', function () {
			$(this).tooltip('hide')
		});
			
	});
})(jQuery);
