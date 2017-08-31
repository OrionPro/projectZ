// подключение common.js

function accordion() {
	$(".accordion .accordion_title").click(function () {
		var $content = $(this).next();
		if ($content.is(":visible")) { //если нажали на title аккордеона,
			$content.slideUp(500, function () { //и если контент аккордеона видимый, то
			}); //убираем его
			$(this).children().removeClass("active"); //убираем активный класс у стрелки к примеру
			$(this).removeClass("active");

		} else {
			$(".accordion .accordion_content").slideUp("slow"); //если невидимый, прячем все скрытые
			$(".accordion .accordion_title").children() //убираем активный класс у стрелки к примеру
				.removeClass("active");
			$(".accordion_title").removeClass("active"); //убираем активный класс у стрелки к примеру
			$content.slideToggle("slow"); //открываем скрытый блок у того что нажали
			$(this).children().addClass("active"); //добавляем активный класс у стрекли к примеру
			$(this).addClass("active");
		}
	});
}
function Loading() {
	var level = 0;

	setInterval(function () {
		level += 0.1; // Скорость выполнения
		if (level > 100) {
			level = 0;
		} else {
			$('.level').css('width', (level + '%'))
		}
	}, 10) // Плавность

}


$(window).scroll(function () {
});



function setCursorPos(elem, pos) {
	if (elem.setSelectionRange) {
		elem.focus();
		elem.setSelectionRange(pos, pos);
	}
	else if (elem.createTextRange) {
		var range = elem.createTextRange();

		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
// A
function inputPadding() {
	$(".recruiting-editing__input").each(function () {
		var widthSpan = $(this).find("label").width();
		$(this).find("input").css("paddingLeft", widthSpan + 20);
	});
}

// Функция копирования текста в элементе
function copyToClipboard(elem) {
	// create hidden text element, if it doesn't already exist
	var targetId = "_hiddenCopyText_";
	var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	var origSelectionStart, origSelectionEnd;
	if (isInput) {
		// can just use the original source element for the selection and copy
		target = elem;
		origSelectionStart = elem.selectionStart;
		origSelectionEnd = elem.selectionEnd;
	} else {
		// must use a temporary form element for the selection and copy
		target = document.getElementById(targetId);
		if (!target) {
			var target = document.createElement("textarea");
			target.style.position = "absolute";
			target.style.left = "-9999px";
			target.style.top = "0";
			target.id = targetId;
			document.body.appendChild(target);
		}
		target.textContent = elem.textContent;
	}
	// select the content
	var currentFocus = document.activeElement;
	target.focus();
	target.setSelectionRange(0, target.value.length);

	// copy the selection
	var succeed;
	try {
		succeed = document.execCommand("copy");
	} catch (e) {
		succeed = false;
	}
	// restore original focus
	if (currentFocus && typeof currentFocus.focus === "function") {
		currentFocus.focus();
	}

	if (isInput) {
		// restore prior selection
		elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	} else {
		// clear temporary content
		target.textContent = "";
	}
	return succeed;
}
$(document).ready(function () {
	//копируем то что в input
	$(".copyLin").on("click", function (e) {
		e.preventDefault();
		var copyInput = document.getElementById("copyTarget");
		copyToClipboard(copyInput);
	});
	//кликабельная строка в таблице
	$('tbody tr[data-href]').addClass('clickable').click(function () {
		//window.location = $(this).attr('data-href'); // В том же окне
		window.open($(this).attr('data-href')); // В новом окне
	}).find('a, .check').hover(function () {
		$(this).parents('tr').off('click');
	}, function () {
		$(this).parents('tr').click(function () {
			window.open($(this).attr('data-href'));
		});
	});
	// Вызов функции добавления паддингов у label
	inputPadding();

	// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		var ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Edge/) > 0) return 'Edge';
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';

		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		$(".balance-container .table tr td .info").css("top", "24px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}
	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Edge")  {
		$('.check i, .radio i').css("margin-top", "2px")
	}
	Loading();
	//fixedHeader
	var logoAndInfo = $(".logo-container").outerHeight() + $(".top-important-information").outerHeight();
	$("#fixed").sticky({topSpacing: -logoAndInfo + 5});

	accordion();
	$('.select-2').hover(function () {
		$(this).find('.active').toggleClass("color");
		$(this).find('.login').toggleClass("color");
		$(this).find('.select-list').toggle("drop", {direction: "left"}, 200);
	});
	
	
	
	$(".input-mask").mask("+38(999) 999-99-99");
	$(".whis-contry").mask("(9) 99 999 99 99");
	
	
	$(".back-lote-input")
		.click(function () {
			var arr = $(this).val().split(' '),
				arrMain =  $(this).val().split(" " + arr[arr.length - 1]);
			if(arr[0] == "0"){
				$(this).val(" " + arr[1]);

				setCursorPos(this, arrMain[0].length-1);
			}else{
				setCursorPos(this, arrMain[0].length);
			}
	});
	// Анимация при клике
	var lf1 = new TimelineMax(),
		lf2 = new TimelineMax();

	lf1.pause();
	lf2.pause();
	function anim () {
		lf1.pause();
	}
	function anim2 () {
		lf2.pause();
	}
	lf1.to('#anim-form-main-1', 0.5, {y: -100, opacity: 0, ease: Power0.easeIn});
	lf2.to('#anim-form-main-2', 0.5, {y: 0, opacity: 1,  ease: Power0.easeIn});

	$('#find-game-or-server').click(function (e) {
		e.preventDefault();
		lf1.play();
		lf2.play();
	});
	$('#close-game-or-server').click(function (e) {
		e.preventDefault();
		lf1.reverse();
		lf2.reverse();
	});

	var lg1 = new TimelineMax();
	var lg2 = new TimelineMax();
	lg1.to('.login1', 1.5, {y: 1000, opacity: 0, ease: Power4.easeOut});
	lg2.set('.login2', {y: -500, opacity: 0})
		.to('.login2', 1, {y: 0, opacity: 1, ease: Elastic.easeOut.config(0.6, 0.4)});
	lg1.pause();
	lg2.pause();
	$(".main_content .main_conten_form_wrap input[type = submit]").click(function (e) {
		e.preventDefault();
		lg1.play();
		lg2.play();
	});

	// Анимация interlocutor-writes-svg
	var interlocutorSvg = new TimelineMax({repeat: -1,repeatDelay: 0.2});

	interlocutorSvg.staggerFrom(".interlocutor-writes.active .interlocutor-comments-circle", 0.3, {fill: '#000', scale: 0, transformOrigin: "50% 50%", ease: Power2.easeInOut}, 0.3);

	$(".tabs-item").on('click', function (event) { //ссылки которые будут переключать табы
		event.preventDefault();

		$(".tabs-item").removeClass('active'); //убираем активные состояния у ссылок

		$(this).addClass('active'); //Добавляем активное состояние у той что нажали

		var data = $(this).data('tab'); //создаём переменную с датой
		$('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
		$('.tabs-wrap[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
		if (data === 3) {
			$('.service-container .tabs-item-conatiner .filter-select .necessary-item').addClass('active');
		} else {
			$('.service-container .tabs-item-conatiner .filter-select .necessary-item').removeClass('active');
		}
		if (data === 4) {
			$('.balance-container .balance-right-block').removeClass('active');
			$('.balance-container .balance-affiliate-program').addClass('active');
		} else {
			$('.balance-container .balance-right-block').addClass('active');
			$('.balance-container .balance-affiliate-program').removeClass('active');
		}

	});
	$(".commets-links a").on('click', function (event) { //ссылки которые будут переключать табы
		event.preventDefault();

		$(".commets-links a").removeClass('active'); //убираем активные состояния у ссылок

		$(this).addClass('active'); //Добавляем активное состояние у той что нажали

		var data = $(this).data('tab'); //создаём переменную с датой
		$('.comments-item').removeClass("active"); //убираем активные состояния у табов
		$('.comments-item[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
		//атрибут в ссылке то делаем его активным
	});
	$('.chat').scrollbar();

	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });

	//  Активация слайдера
	// $(".owl-carousel").owlCarousel({
	//     loop: true,
	//     items: 1,
	//     dots: true
	// });

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });


});


$(window).resize(function () {

});

$(window).scroll(function () {

});

