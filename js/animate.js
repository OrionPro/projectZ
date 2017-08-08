// подключение animate.js

class Animation {

	constructor() {
		this.tl0 = new TimelineMax();
		this.tl1 = new TimelineMax();
		this.tl2 = new TimelineMax();
		this.tl3 = new TimelineMax();
		this.tl4 = new TimelineMax();
		this.tl5 = new TimelineMax();

		this.tl0.pause();
		this.tl1.pause();
		this.tl2.pause();
		this.tl3.pause();
		this.tl4.pause();
		this.tl5.pause();
	}

	description() {
		this.tl0.staggerFrom('.logo-letter', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.2, '+=0.5')
			.from('#path72231313213', 0.5, {
				skewX: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, 1, '0.5')
			.from('#path51313213', 0.5, {
				skewX: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, 1.2, '0.5');
		this.tl1.from('.our-guarantees__img', 0.7, {
			y: -100,
			opacity: 0,
			ease: Power4.easeOut
		}, '+=0.5');

		this.tl2
			.add("how-it-works_anim1", "+=0.6")
			.staggerFrom('.how-it-works_anim1 #rect4182', 0.5, {drawSVG: "50% 50%"}, 0.3, "how-it-works_anim1")
			.add("how-it-works_anim1", "-=1")
			.staggerFrom('.how-it-works_anim1 #text4221', 0.5, {
				x: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, "how-it-works_anim1")
			.add("how-it-works_anim1", "-=1.2")
			.staggerFrom('.how-it-works_anim1 .how-it-works_anim_img', 0.5, {
				x: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, "how-it-works_anim1");
		this.tl3
			.add("how-it-works_anim2", "+=0.6")
			.staggerFrom('.how-it-works_anim2 #rect41821', 0.5, {drawSVG: "50% 50%"}, 0.3, "how-it-works_anim2")
			.add("how-it-works_anim1", "-=1")
			.staggerFrom('.how-it-works_anim2 #text4221', 0.5, {
				x: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, "how-it-works_anim2")
			.add("how-it-works_anim2", "-=1.2")
			.staggerFrom('.how-it-works_anim2 .how-it-works_anim_img2', 0.5, {
				x: -100,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, "how-it-works_anim1");
		this.tl4
			.staggerFrom('.content-section .banners__item', 1, {
				scaleY: 0.7,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3, "+=1")
			.staggerFrom('.content-section .main-content .wrap', 0.7, {
				scaleX: 0.7,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2, "-=0.6");
		this.tl5
			.from(".recruiting-find-clan__video-block", 0.7, {
				scaleY: 0.7,
				opacity: 0,
				ease: Power3.easeOut
			},0.5)
	}

	activeSection(section, startTop = 0, startBotton = 0) {
		section = '.' + section;
		if ($(section).offset() !== undefined) {
			var topPosition = $(section).offset().top - startTop,
				bottomPosition = $(section).offset().top + $(section).height() - startBotton;
			if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
				return true;
			}
		}
	}

	play() {
		if (this.activeSection('content-section',500, 500)) {
			this.tl0.resume();
		}
		if (this.activeSection('content-section',500, 500)) {
			this.tl1.resume();
		}
		if (this.activeSection('content-section',220, 400)) {
			this.tl2.resume();
		}
		if (this.activeSection('how-it-works_anim2',520, 400)) {
			this.tl3.resume();
		}
		if (this.activeSection('content-section',500, 500)) {
			this.tl4.resume();
		}
		if (this.activeSection('recruiting-find-clan.inner',500, 500)) {
			this.tl5.resume();
		}
	}
}


let anim = new Animation;

$(window).scroll(function() {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {

	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}

});