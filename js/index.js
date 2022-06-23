console.log("Your index.js file is loaded correctly!");

$(function() {
    $(window).scroll( function(){
    $('.me_body').each( function(i){

        var target_bottom = $(this).position().top + $(this).outerHeight();
        var window_bottom = $(window).scrollTop() + $(window).height();
        window_bottom = window_bottom + 800;  

        if( window_bottom > target_bottom ){

            $(this).animate({'opacity':'1'},1000);

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

            $(this).animate({'opacity':'1'},1000);

            }
        }); 

    });
});



$(document).ready(function() {
    //change the integers below to match the height of your upper div, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 550) {
        $('.case_nav').addClass('case_nav-fixed');
      }
  
      if ($(window).scrollTop() < 551) {
        $('.case_nav').removeClass('case_nav-fixed');
      }
    });
  });