// custom select old
var customSelect = $('.present');
jcf.replace(customSelect);

$(document).ready(function(){

	// mask tell
	$(".tell_mask").inputmask({ mask: "+7-99-999-99"});
	// tooltips
	$('[data-toggle="tooltip"]').tooltip();
	// sidebar menu
		$(".active .link_drop_js").parent().find(".drop_js").slideDown("fast");
		$(".link_drop_js").click(function(){
			if($(this).parent().hasClass("active")){

			$(this).parent().find(".drop_js").slideUp("fast");
			$(this).parent().removeClass("active");
			}
			else{
			$(this).parent().find(".drop_js").slideDown("fast");
			$(this).parent().addClass("active");
			}
			//return false;
		});
		// responsive tabs
		$('#responsiveTabsDemo').responsiveTabs({
			startCollapsed: 'accordion'
		});
	// favorite
		$(".go_favorite_js a").click(function(){
			$(this).parents(".item_task").toggleClass("in_favorite");
			return false;
		});
		$(".favorite_js a").click(function(){
			$(this).parent().toggleClass("active");
			return false;
		});
	// 
	// toggle chat
		$(".chat_toogle_js").click(function(){
			$(this).toggleClass("active");
			$(".chat_main_holder").toggleClass("active");
		});
		// switch_panel_chat
		$(".switch_panel_chat_js").click(function(){
			$(".chat_main_holder").toggleClass("active");
		});

	// stars js
	$('#star_rating').barrating('show', {
        theme: 'bootstrap-stars',
    });
    $('#star_rating').barrating('set', '3');
    // add form comment
    $(".add_review_js").click(function(){
		$(this).toggleClass("active").parents(".tabe_panel_js").toggleClass("add_comment_active").find(".add_form").slideToggle("fast");
		$(this).parents(".tabe_panel_js").toggleClass("add_comment_active").find(".hidden_at_active").slideToggle("fast");
		var $link_bnt = $(".add_review_js");
			if ($link_bnt.hasClass("active")) {
		        $link_bnt.html(" Убрать форму");
		    } else {
		        $link_bnt.html(" Оставить отзыв");
		    }
		return false;
	});
	
    // add comment 
    $(".answer_js").click(function(){
		$(this).parents(".comment_content").find(".comment_form_js").slideDown("fast");
		return false;
	});
	$(".form_close_js").click(function(){
		$(this).parents(".comment_content").find(".comment_form_js").slideUp("fast");
		return false;
	});
	// sidebar menu 2
	$(".sidebar_toggle_js").click(function(){
		$(".sidebar_js").slideToggle("fast");
		return false;
	});
	// funcs of search
	$(".input_overlay_js").focus(function(){
		$(".input_overlay_parent_js").addClass("opened");
		$(".holder_overlay_js").addClass("active");

		$(".search_bar").toggleClass("active");
	});
	$(".input_overlay_parent_js").click(function(){
		$(this).removeClass("opened");
		$(".mobile_filter_js").removeClass("active");
		$(".holder_overlay_js").removeClass("active");
		$("body").removeClass("body_overflow");

		$(".search_bar").toggleClass("active");
	});
	
	$(".back_toggler_js").click(function(){
		$(".input_overlay_parent_js").removeClass("opened");
		$(".holder_overlay_js").removeClass("active");

		$(".search_bar").toggleClass("active");
	});
	$(".btn_settings_js").click(function(){
		$(".mobile_filter_js").toggleClass("active");
		$(".input_overlay_parent_js").toggleClass("opened");
		$("body").toggleClass("body_overflow");

		$(".search_bar").toggleClass("active");
		return false;
	});
	
	$(".close_filter_js").click(function(){
		$(".mobile_filter_js").toggleClass("active");
		$(".input_overlay_parent_js").toggleClass("opened");
		$("body").toggleClass("body_overflow");

		$(".search_bar").toggleClass("active");
		return false;
	});
});
// custom input file
$(function(){  
  $('.inputfile_js').change(function(){
    var label = $(this).parent().find('span'); 
    if(typeof(this.files) !='undefined'){ // fucking IE      
      if(this.files.length == 0){
        label.removeClass('withFile').text(label.data('default'));
      }
	 else if(this.files.length > 1){
			 
			label.addClass('withFile').text( this.files.length + ' files');
	  }
      else{
        var file = this.files[0]; 
        var name = file.name;
        var size = (file.size / 1048576).toFixed(3); //size in mb 
        label.addClass('withFile').text(name + ' (' + size + 'mb)');
      }
    }
    else{
		 
      var name = this.value.split("\\");
	      label.addClass('withFile').text( name[name.length-1]);
    }
    return false;
  });  
});

// sort group buuttons
var upIcon = '<i class="fal fa-arrow-to-top icon_up"></i>';
var downIcon = '<i class="fal fa-arrow-to-bottom icon_down"></i> ';

var $buttons = $('.btn_sort_js');
$buttons.on('click', function(e) {
var $this = $(this);
if ($this.hasClass('active')) {
  if ($this.hasClass('active_up')) {            
    $this.removeClass('active_up')    
    $this.find('.icon_up').remove();            
    
    $this.append(downIcon);            
    $this.addClass('active_down')
  } else if ($this.hasClass('active_down')) {
    $this.removeClass('active_down')
    $this.find('.icon_down').remove();            
    $buttons.removeClass('active')
  } 
} else {
  $buttons.removeClass('active')
  $buttons.removeClass('active_up')
  $buttons.removeClass('active_down')
  $buttons.find('.icon_up, .icon_down').remove();
  $this.addClass('active')
  $this.addClass('active_up')            
  $this.append(upIcon)
}
e.preventDefault();
});

// fixed services 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
        $('.bar_services_js').addClass('bar_services_sticky');
    }
    else {
        $('.bar_services_js').removeClass('bar_services_sticky');
    }
});


// custom scroll services

// Cache selectors
var lastId,
    topMenu = $(".bar_services_js"),
    topMenuHeight = topMenu.outerHeight()+65,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});