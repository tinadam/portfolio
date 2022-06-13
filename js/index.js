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