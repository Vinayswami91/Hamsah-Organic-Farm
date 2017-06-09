var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(this).blur();
  });

  $(function() {
	$('#carousel2').carouFredSel({
		items: 1,
		scroll: {
			duration: 2500,
			timeoutDuration: 1500,
			easing: 'elastic'
		}
	});
});
  /*
  $(function() {
 
	var $c = $('#carousel'),
		$w = $(window);
 
	$c.carouFredSel({
		align: false,
		items: 10,
		scroll: {
			items: 1,
			duration: 2000,
			timeoutDuration: 0,
			easing: 'linear',
			pauseOnHover: 'immediate'
		}
	});
 
	
	$w.bind('resize.example', function() {
		var nw = $w.width();
		if (nw < 990) {
			nw = 990;
		}
 
		$c.width(nw * 3);
		$c.parent().width(nw);
 
	}).trigger('resize.example');
 
	});
	*/
  //carousel 4

  $(function() {
	$('#carousel4').carouFredSel({
		width: $(window).width(),
		height: $(window).height(),
		align: false,
		items: {
			visible: 1,
			width: 'variable',
			height: 'variable'
		}
	});
 	$('#carousel4').trigger('configuration', ['auto.fx', 'crossfade']);
	$(window).resize(function() {
		var newCss = {
			width: $(window).width(),
			height: $(window).height()
		};
		$('#carousel4').css( 'width', newCss.width*4 );
		$('#carousel4').parent().css( newCss );
		$('#carousel4 div').css( newCss );
	}).resize();
 
	$('select#fx').change(function() {
		
	});
});

//carousel 3

	$(function() {
		$('#slider3').carouFredSel({
			width: '100%',
			align: false,
			items: 3,
			items: {
				width: $('#wrapper3').width() * 0.15,
				height: 500,
				visible: 1,
				minimum: 1
			},
			scroll: {
				items: 1,
				timeoutDuration : 7500,
				onBefore: function(data) {
	 
					//	find current and next slide
					var currentSlide = $('.slide3.active', this),
						nextSlide = data.items.visible,
						_width = $('#wrapper3').width();
	 
					//	resize currentslide to small version
					currentSlide.stop().animate({
						width: _width * 0.15
					});		
					currentSlide.removeClass( 'active' );
	 
					//	hide current block
					data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
	 
					//	animate clicked slide to large size
					nextSlide.addClass( 'active' );
					nextSlide.stop().animate({
						width: _width * 0.7
					});						
				},
				onAfter: function(data) {
					//	show active slide block
					data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
				}
			},
			onCreate: function(data){
	 
				//	clone images for better sliding and insert them dynamacly in slider
				var newitems = $('.slide3',this).clone( true ),
					_width = $('#wrapper3').width();
	 
				$(this).trigger( 'insertItem', [newitems, newitems.length, false] );
	 
				//	show images 
				$('.slide3', this).fadeIn();
				$('.slide3:first-child', this).addClass( 'active' );
				$('.slide3', this).width( _width * 0.15 );
	 
				//	enlarge first slide
				$('.slide3:first-child', this).animate({
					width: _width * 0.7
				});
	 
				//	show first title block and hide the rest
				$(this).find( '.slide-block' ).hide();
				$(this).find( '.slide3.active .slide-block' ).stop().fadeIn();
			}
		});
	 
		//	Handle click events
		$('#slider3').children().click(function() {
			$('#slider3').trigger( 'slideTo', [this] );
		});
	 
		//	Enable code below if you want to support browser resizing
		$(window).resize(function(){
	 
			var slider = $('#slider3'),
				_width = $('#wrapper3').width();
	 
			//	show images
			slider.find( '.slide3' ).width( _width * 0.15 );
	 
			//	enlarge first slide
			slider.find( '.slide3.active' ).width( _width * 0.7 );
	 
			//	update item width config
			slider.trigger( 'configuration', ['items.width', _width * 0.15] );
		});
	 
	});
});

