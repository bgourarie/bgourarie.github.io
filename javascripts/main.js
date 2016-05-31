$( document ).ready(function() {

		// hide stuff we dont want visible...
		$('#projects').hide();

 		$('.menu-item-projects').on('click', function(e){
 			$('li').removeClass('active');
 			$(this).addClass('active');
			$('#about').hide();
 			$('#projects').show();
 		});
	 	$('.menu-item-about').on('click', function(e){
			$('li').removeClass('active');
	 		$(this).addClass('active');
			$('#projects').hide();
	 		$('#about').show();
	 	});

});