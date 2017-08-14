$(document).ready(function() {
  $('.reponsive-menu li .sub-1').slideUp();
   $('.reponsive-menu li .sub-1 li .sub-2').slideUp();
 $('label').click(function(event) {
 	$('.reponsive-menu').slideToggle();
 });

   $('.reponsive-menu .sub-00').click(function(event) {
 	$(this).next().slideToggle();

  });
   $('.reponsive-menu .sub-01').click(function(event) {
 	$(this).next().slideToggle();

 });
 
});