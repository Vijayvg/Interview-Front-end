/* global $ */
(function global() {
  var toggleElem = document.querySelector('.nav__toggle'),
    header = document.querySelector('.header'),
    body = document.body,
    sections = document.querySelectorAll('.home-section');

  function addVisibleClass() {
    sections.forEach(function(element) {
      if (
        element.offsetTop <
        document.body.scrollTop + window.innerHeight / 2
      ) {
        element.classList.add('inview');
      }
    });
  }

  toggleElem.addEventListener('click', function() {
    header.classList.toggle('nav__open');
  });

  document.addEventListener('readystatechange', function() {
    body.classList.add('dom__ready');
    addVisibleClass();
  });

  window.addEventListener('scroll', function() {
    addVisibleClass();
  });

  $('.testimonial__wrap').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
})();
