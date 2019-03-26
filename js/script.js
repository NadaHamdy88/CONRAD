$(function(){
    // $('div.awesome img').mousemove(function(){
    //     $('.overlay').hide();
    // });

    $('.first').click(function(){
        $('.one').show();
        $('.two').hide();
    });

    $('.second').click(function(){
        $('.two').show();
        $('.one').hide();
    });

   $(window).scroll(function(){
       var scroll = $(this).scrollTop();
       if(scroll > 500)
       {
           $('.header').slideDown();
       }
       else
       {
           $('.header').slideUp();
       }
   });

   $('.fancybox').fancybox();


   $('.one').css('display','block');

   $('div.accordion h3').click(function(){
       $(this).next().slideToggle();
       $('div.accordion p').not($(this).next()).slideUp();
   })

    $('.download').click(function(){
        $('.timer').countTo();
    });
  

   $('.all_images').mixItUp();

   $("html").niceScroll();



});

