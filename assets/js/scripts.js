$(document).ready(function(){
  const $slider = $('.slider');

  $slider.slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('#pause').on('click', function(){
    $slider.slick('slickPause');
  });

  $('#play').on('click', function(){
    $slider.slick('slickPlay');
  });
});

