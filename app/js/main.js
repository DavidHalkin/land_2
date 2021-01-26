// $(document).ready(function(){
// 	$('.proposition_gal_js').owlCarousel({
// 	    responsiveClass:true,
// 	    responsive:{
// 	        0:{
// 	            items:2,
// 	            center: true,
// 	            nav:false
// 	        },
// 	        520:{
// 	            items:3,
// 	            nav:false
// 	        }
// 	    }
// 	})
// });
function CarouselInit() {

   var checkWidth = $(window).width();
   var carousel = $(".proposition_gal_js");
   if (checkWidth < 575) {
       carousel.addClass('owl-carousel').owlCarousel({
           responsive: {
               0:{
	            items:2,
	            center: true,
	            nav:false
	        }
           }
       });
   } else {
       if (carousel.data('owlCarousel') != 'undefined') {
           carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel');
       }
   }
};
$(document).ready(CarouselInit);
$(window).resize(CarouselInit);