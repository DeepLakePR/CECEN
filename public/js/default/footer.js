feather.replace();

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 2,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			600: {
				items: 4
			},
			1300: {
				items: 6
			}
		}
	});
});
