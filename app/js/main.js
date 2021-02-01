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

$(document).ready(function(){
  $(".more_info_js .more_info_btn").click(function(){
    $(this).toggleClass("active");
    $(this).parent().find(".more_info_content").slideToggle("fast");
  });
  // show hide inputs  on search bar
  $(".total_search_js").click(function(){
    $(this).parent().toggleClass("opened");
    $(this).slideToggle("fast");
    $(this).parent().find(".total_search_inputs").slideToggle("fast");
  });
//   $(window).scroll(function(){
//     // $(".total_search_block.opened .total_search_js").slideToggle("fast");
//     // $(".total_search_block.opened .total_search_inputs").slideToggle("fast");
//     //  if ($(".total_search_block").hasClass('opened')) {
//     //     alert("d");
//     //     $(".total_search_block .total_search_js").slideToggle("fast");
//     //     $(".total_search_block .total_search_inputs").slideToggle("fast");
//     // }
//     // else {
        
//     // }
// });


  // tooltip
    var tooltipTemplate = ['<div class="tooltip tooltip_custom" role="tooltip">',
      '<div class="arrow"></div>',
      '<div class="tooltip-inner text-left font-weight-bold px-3 py-2">',
      '</div>',
      '</div>'].join('');
      // $('[data-toggle="tooltip_custom"]').tooltip("show")
    $('[data-toggle="tooltip_custom"]').tooltip({
      template: tooltipTemplate
    });

  $('.mini_gal_js').owlCarousel({
    items:1,
    nav:true,
    loop:true,
    navText:["<svg width='24' height='24' viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'><g fill='none'><path style='stroke: rgb(255, 255, 255);' stroke-width='2' d='M5 8l7 7 7-7'></path></g></svg>","<svg width='24' height='24' viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'><g fill='none'><path style='stroke: rgb(255, 255, 255);' stroke-width='2' d='M5 8l7 7 7-7'></path></g></svg>"],
  });
});