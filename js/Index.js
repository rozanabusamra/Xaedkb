$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNav');
			$('.backToTop').addClass ('visible');
            $('.colorOption').addClass ('colorOptionBorder');
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scrollNav');
			$('.backToTop').removeClass ('visible');
            $('.colorOption').removeClass ('colorOptionBorder');
        };
    });
    $('.backToTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
    });
    
    $('.cog').click(function(){
        $('.colorOption').fadeToggle(800);
    });
    var colorLi = $('.colorOption ul li');
    colorLi
    .eq(0).css('background','#fb3e3e').end()
    .eq(1).css('background','#1bbc9d').end()
    .eq(2).css('background','#f85f89').end()
    .eq(3).css('background','#00e6e6').end()
    .eq(4).css('background','#704fff').end()
    .eq(5).css('background','#2762da').end()
    .eq(6).css('background','#f09105').end()
    .eq(7).css('background','#f6cb42').end();

    
   /* colorLi.click(function(){
        $("link[href*='theme']").css("background",$(this).css("background"))
        //console.log($(this).attr("data-value"));
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });*/
    
});