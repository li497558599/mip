
$(function(){
$(".nav ul li:even()").addClass("add");
$(".pagination2 a:eq(0)").text($(".sl10-ab-txt a:eq(0)").text());
$(".pagination2 a:eq(1)").text($(".sl10-ab-txt a:eq(1)").text());
$(".pagination2 a:eq(2)").text($(".sl10-ab-txt a:eq(2)").text());
/*var url=$('.sl10-ab-txt a:eq(0)').attr('href');
$(".pagination2 a:eq(0)").click(function(){ 
  window.location.href=url;
 })
var url1=$('.sl10-ab-txt a:eq(1)').attr('href');
$(".pagination2 a:eq(1)").click(function(){ 
  window.location.href=url1;
 })
var url2=$('.sl10-ab-txt a:eq(2)').attr('href');
$(".pagination2 a:eq(2)").click(function(){ 
  window.location.href=url2;
 })*/

$(".head-dla").hover(function(){
	if($(this).find("dd").is(":hidden")){
		$(this).find("dd").slideDown(0);
		}else{
		$(this).find("dd").slideUp(0);	
		}						
	})	   

$('.psl10-ca span').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".psl10-cb").find('.psl10-cbm').eq($(this).index()).show().siblings().hide();
});	   

$('.sl10-ea-at span').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".sl10-ea-am").find('.sl10-ea-amx').eq($(this).index()).show().siblings().hide();
});		   



$('.psl9-d-ulb li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".psl9-da").find('.psl9-tbox').eq($(this).index()).show().siblings().hide();
});	 
		   
$(".close").click(function(){
	$(".fbox").hide(0);							
	})	
		   
$(".fboxam span").click(function(){
	$(".fboxa").hide(0);							
	})		   


$(".fbox-dld").click(function(){
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},300);
 })
$(".pfbox-c").click(function(){
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},300);
 })
		   
$(".slw-phd-d a").click(function(){
	$(this).toggleClass("on");							
	})

$(".fbox dl").hover(function(){
   $(this).find("dd").fadeIn(300);
 },function(){
   $(this).find("dd").fadeOut(300);
 })	


});


 var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })
 
 var mySwiper2 = new Swiper('.swiper-container2',{
    pagination: '.pagination2',
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-l').on('click', function(){
    mySwiper2.swipePrev();
  })
  $('.arrow-r').on('click', function(){
    mySwiper2.swipeNext();
  })
 
 var mySwiper3 = new Swiper('.swiper-container3',{
    pagination: '.pagination3',
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-la').on('click', function(){
    mySwiper3.swipePrev();
  })
  $('.arrow-ra').on('click', function(){
    mySwiper3.swipeNext();
  })
 
 var mySwiper4 = new Swiper('.swiper-container4',{
    pagination: '.pagination4',
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-lb').on('click', function(){
    mySwiper4.swipePrev();
  })
  $('.arrow-rb').on('click', function(){
    mySwiper4.swipeNext();
  })
  
 var mySwiper5 = new Swiper('.swiper-container5',{
    pagination: '.pagination5',
    grabCursor: true,
    paginationClickable: true
  })
  $('.arrow-lc').on('click', function(){
    mySwiper5.swipePrev();
  })
  $('.arrow-rc').on('click', function(){
    mySwiper5.swipeNext();
  })
 