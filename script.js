jQuery(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:'<span class="arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }]
      });
  })