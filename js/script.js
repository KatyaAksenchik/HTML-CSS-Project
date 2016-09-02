$(document).ready(function(){


/** слайдер на index.html **/

  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    mode: 'vertical',
    slideMargin: 5
  });

  /**слайдер на news.html **/

  $('.bxslider_news').bxSlider({
    auto: true,
    autoControls: true
  });


/**открытие/скрытие блоков на странице news.html **/
  $(".show_more").click(function() {
    $(this).hide();
    $(this).next(".hide_part").fadeIn();

  });

$(".hide_more").click(function() {
  $(this).parent(".hide_part").hide();
  $(this).parent(".hide_part").prev(".show_more").show();
});

$(".go_sub").click(function() {
if ($(".text_sub").val()!="")
  {$(this).next(".sub_hide").fadeIn();
   $(this).next(".sub_hide").fadeOut(5000);}
 else alert("Введите Вашу почту!");

 $(".text_sub").val('');
});

/** регистрация **/

$("#enter_button").click(function(){
 $(".form, #bg_layer").show();

});


$("#send").click(function(){

$("#nickname").removeClass("black");
$("#pass").removeClass("black");
$(".hide").hide();

if ( $("#nickname").val().length < 3 ||  $("#nickname").val().length > 20 )
 { $("#nickname").next().show();
  $("#nickname").addClass("black")}

else if( $("#pass").val()=="")
  { $("#pass").next().show();
    $("#pass").addClass("black");}

else

  {
     $(".form, #bg_layer ").hide();
     var data = $("#nickname").val();
    $(".login span").html(data);
     $(".login").show();
}

});

$(".cross").click( function()
{
  $(".form, #bg_layer ").hide();
});

$(document).keydown(function(e) {
        if( e.keyCode === 27 ) {
 $(".form, #bg_layer ").hide();
    }
});

/** расскрыть меню для 320px **/

 $(".menu_button").click(function(){
  $("#ul_nav").slideToggle();
});

/** расскрыть карты сайта **/

$(".map_of_the_site").click(function(){
  var top=$(this).position().top;
  var left=$(this).position().left;
  $(".map_navigation").css({top: top+25, left: left+5}).slideToggle();
});


/** кнопка ввер/вниз **/
$("#back-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});


  });


});
