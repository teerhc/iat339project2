jQuery(document).ready(function($){

			$('header').append('<div id="mobile-menu">Menu</div>');

			/* toggle nav */
			$('#mobile-menu').click ( function() {				
				$('header nav').slideToggle();
				$(this).toggleClass('active');
				$('#mobile-menu').toggleClass('clicked');
			});
		});

jQuery(document).ready(function($){

	$('.multi-all').prepend('<div id="category-menu" class="nav-button">Categories</div>');

	/* toggle nav */
	$('#category-menu').click ( function() {
		$('.product-nav').slideToggle();
		$(this).toggleClass('active');
	});
});