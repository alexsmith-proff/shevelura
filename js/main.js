$( document ).ready(function() {

	// elImg - элемент картинка(плюс,минус);
	// elLink - элемент ссылка(Подробнее, Свернуть)
	// elToggle - элемент Toggle (который нужно свернуть, развернуть) 
	let toggleItem = (elLink, elImg, elToggle) => {
		let parentEl = $(elLink).parent();

		if ($(elLink).text() === 'Подробнее') {
			// минус''
			parentEl.find(elImg).attr("src","img/minus.png");			
			$(elLink).text('Свернуть');
			//parentEl.find('.education__item_toggle_wrap').height(parentEl.find('.education__item_toggle_container').height());

		}else {
			// плюс
			parentEl.find(elImg).attr("src","img/plus.png");	
			$(elLink).text('Подробнее');
		}
		parentEl.find(elToggle).toggleClass('expand');

	}

	
	$('.menu-burger').click(function(event) {
		$(this).toggleClass('open-menu');
		$('.topnav').toggleClass('responsive');
	});	

	$('.price__item').click(function(event) {
		//$('.tog').toggle();
		let height_price__list = $('.price__list').height();
		let height_price__subitem = $(this).next().height();
		console.log('height_price__list =' + height_price__list + '   height_price__subitem = ' + height_price__subitem);

		if ($(this).next().is(':hidden')) {
			// минус
			$(this).children('img').attr("src","img/minus.png");			
		}else {
			// плюс
			$(this).children('img').attr("src","img/plus.png");
		}
		
		$(this).next().slideToggle("slow");
	});	





	$(".education__item_link").click(function() {
		toggleItem(this, '.education__item_img', '.education__item_toggle_wrap');	
	});

	$(".stock__item_link").click(function() {
		toggleItem(this, '.stock__item_img', '.stock__item_toggle_wrap');	
	});


	Fancybox.bind('[data-fancybox="gallery"]', {
		Toolbar: false,
		animated: false,
		dragToClose: false,

		showClass: false,
		hideClass: false,

		closeButton: "top",

		Image: {
			click: "close",
			wheel: "slide",
			zoom: false,
			//fit: "cover",
		},

		Thumbs: {
			minScreenHeight: 1,
		},
	});

	Fancybox.bind('[data-fancybox="photogallery"]', {
		Toolbar: false,
		animated: false,
		dragToClose: false,

		showClass: false,
		hideClass: false,

		closeButton: "top",

		Image: {
			click: "close",
			wheel: "slide",
			zoom: false,
			//fit: "cover",
		},

		Thumbs: {
			minScreenHeight: 1,
		},
	});



	/*$('#contact-btn').click(function(){
		Fancybox.show([{ src: "#contact-form", type: "inline", ArrowUp: "next" }]);
	});
*/


});