console.log("Your index.js file is loaded correctly!");

$(function() {
    $(window).scroll( function(){
    $('.me_body').each( function(i){

        var target_bottom = $(this).position().top + $(this).outerHeight();
        var window_bottom = $(window).scrollTop() + $(window).height();
        window_bottom = window_bottom + 800;  

        if( window_bottom > target_bottom ){

            $(this).animate({'opacity':'1'},1500);

            }
        }); 

    });
});

$(function() {
    $(window).scroll( function(){
    $('.work').each( function(i){

        var target_bottom = $(this).position().top + $(this).outerHeight();
        var window_bottom = $(window).scrollTop() + $(window).height();
        window_bottom = window_bottom + 1000;  

        if( window_bottom > target_bottom ){

            $(this).animate({'opacity':'1'},1500);

            }
        }); 

    });
});

$(document).ready(function() {
        $(window).scroll( function(){
            $('.fade_in').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1'},1500);
                }
            });
        });
    });

$(document).ready(function() {
    var navpos = $('#casenav').offset();
    console.log(navpos.top);
      $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
         $('#casenav').addClass('case_nav-fixed');
         }
         else {
           $('#casenav').removeClass('case_nav-fixed');
         }
      });
  });
