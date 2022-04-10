
$(document).ready(function () {
          $('.autor1').slick({
      // slidesToShow: 3,
			// slidesToScroll: 1,
            //   arrows: false,
      fade: true,
            nextArrow: ".slick-next",
              prevArrow: ".slick-next",
           asNavFor:".autor"
        });
        $('.autor').slick({
        infinite: true,
        slidesToShow: 2,
			  slidesToScroll: 1,
			  centerMode: true,
        variableWidth: true,
          
        // asNavFor:".autor1"
      });
      $('.single-item-rtl').slick({
            rtl: true
        });
  });
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});