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
});

