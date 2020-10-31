$(document).ready(function(){

	var $grid = $('.boxes').isotope({
	  	itemSelector: '.box',
	  	percentPosition: true,
  		masonry: {
  			// columnWidth: 100,
  			// gutter: 10
  		}
	});

	$('.filter').on( 'click', 'p', function() {
  		var filterValue = $(this).attr('data-filter');
  		$('.boxes').isotope({ filter: filterValue });
  		$('.filter p').removeClass('active');
  		$(this).addClass('active');
	});
		
});