



$( document ).ready(function() {




	//Loader 
	setTimeout(function(){
		$('#text-zone').css('right', '0px');
		$('.closed').removeClass('closed');
	},2800);

	setTimeout(function(){
		$('.left').css('transform', 'rotateY(270deg) translateX(-95px) translateY(2px)');
	},200);

	setTimeout(function(){
		$('.right').css('transform', 'rotateY(-270deg) translateX(119px) translateY(-44px) scale(1.1)');
	},600);

	setTimeout(function(){
		$('.frontroof').fadeIn();
		$('.frontroof').css('margin-left', '-136px');
	},900);

	setTimeout(function(){
		$('.logo-title').css('color', '#b65300');
	}, 900);

	setTimeout(function(){
		$('#loader').css('margin-left', '-100vw');
	},2500);

	setTimeout(function(){
		$('#loader').css('display', 'none');
	},3300);




	//hover on menu
	$('.menu-item').mouseenter(
		function(){
			if($(this).children('.menu-link').hasClass('garantie')){
				$(this).children('.menu-link').children('p').css({
					'color': '#fff',
					'font-weight': 'bold',
				});
			} else {
				$(this).children('.hover-effect').css('top', '407px');
				$(this).children('.menu-link').children('p').css({
					'color': 'black',
					'font-weight': 'bold'
				});
			}
		}
	).mouseleave(
		function(){
			if(!$(this).children('.menu-link').hasClass('garantie')){
				$(this).children('.hover-effect').css('top', '450px');
				$(this).children('.menu-link').children('p').css({
					'color': '#b65300',
					'font-weight': '400'
				});
			} else {
				$(this).children('.hover-effect').css('top', '407px');
				$(this).children('.menu-link').children('p').css({
					'color': 'black',
					'font-weight': 'bold'
				});
			}
		}
	);

	$('.menu-item').click(function(){
		$('#sidebar').css('width', '100vw');
		setTimeout(function(){
			$('#close-button').css('display', 'block');
		},500);
	});

	$('#close-button').click(function(){
		$('#close-button').css('display', 'none');
		$('#sidebar').css('width', '507px');
	});



	//slider
   var slider = $('.bxslider').bxSlider({
	  auto: true,
	  stopAutoOnClick: true,
	  adaptiveHeight: true,
	  pager: false,
	  speed: 3000,
	  wrapperClass: 'slider'
	});

	$('#next-slide').click(function(){
		slider.goToNextSlide();
	});

	$('#prev-slide').click(function(){
		slider.goToPrevSlide();
	});


});

