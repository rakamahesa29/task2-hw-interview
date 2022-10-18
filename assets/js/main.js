$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

const swiper = new Swiper(".EventSwiper", {
		slidesPerView: 2,
		loop: true,
    	spaceBetween: 80,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			// when window width is >= 1200px
			1200: {
				slidesPerView: 2,
      			spaceBetween: 80
			},
			// when window width is >= 1024px
			1024: {
				slidesPerView: 2,
      			spaceBetween: 40
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
      			spaceBetween: 20
			},
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
      			spaceBetween: 20
			}
		}
  });