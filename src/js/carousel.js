$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        items: 1,
        dots: false,
        dotsData: true,
        nav: false,
        margin: 10,
        mouseDrag: false,
    });
    var headerowl = $('.header__carousel');
    headerowl.owlCarousel();
      $('.customNextBtn').click(function() {
          headerowl.trigger('next.owl.carousel');
      })
      $('.customPrevBtn').click(function() {
          headerowl.trigger('prev.owl.carousel', [300]);
      })
});

function HeaderCarousel () {
    const btnHeaderNext = document.querySelector('#customNextBtn');
    const btnHeaderPrev = document.querySelector('#customPrevBtn');
    let dotsHeader = document.querySelector('#header-carousel-dots');
    let dotsHeaderNumber = document.querySelector('#header-carousel-active-dots');
    let dotsHeaderInput = document.querySelector('#header-carousel-active-input');
    let slideHeaderAll = document.querySelectorAll('.header__carousel-item');
    let dotsHeaderNumberFiel = parseFloat(dotsHeaderInput.value, 10);

    dotsHeader.innerHTML = `/${slideHeaderAll.length}`;

    btnHeaderPrev.addEventListener('click', function() {
        if (dotsHeaderNumberFiel > 1) {
            dotsHeaderNumberFiel--;
            dotsHeaderInput.value = dotsHeaderNumberFiel;
            dotsHeaderNumber.innerHTML = dotsHeaderInput.value;
        } else {
          return 1;
        }
      });

      btnHeaderNext.addEventListener('click', function() {
        if (dotsHeaderNumberFiel >= 1 && dotsHeaderNumberFiel < 5) {
            dotsHeaderNumberFiel++;
            dotsHeaderInput.value = dotsHeaderNumberFiel;
            dotsHeaderNumber.innerHTML = dotsHeaderInput.value;
        } else {
          return 1;
        }
      });
}

HeaderCarousel();

$(document).ready(function(){
    $(".shop__carousel").owlCarousel({
        items: 6,
        dots: true,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: false
    });
});

$(document).ready(function(){
    $(".shop-big__carousel").owlCarousel({
        items: 4,
        dots: true,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: false
    });
});

$(document).ready(function(){
    $(".promo__carousel--arrivals").owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });
    var promoOwlArrivals = $('.promo__carousel--arrivals');
    promoOwlArrivals.owlCarousel();
      $('.customNextBtn--arrivals').click(function() {
        promoOwlArrivals.trigger('next.owl.carousel');
      })
      $('.customPrevBtn--arrivals').click(function() {
          promoOwlArrivals.trigger('prev.owl.carousel', [300]);
      });
});

$(document).ready(function(){
    $(".promo__carousel--popular").owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });

    var promoOwlPopular = $('.promo__carousel--popular');
    promoOwlPopular.owlCarousel();
      $('.customNextBtn--popular').click(function() {
        promoOwlPopular.trigger('next.owl.carousel');
      })
      $('.customPrevBtn--popular').click(function() {
          promoOwlPopular.trigger('prev.owl.carousel', [300]);
      });
});

$(document).ready(function(){
    $(".promo__carousel--random").owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 11000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });

    var promoOwlRandom = $('.promo__carousel--random');
    promoOwlRandom.owlCarousel();
      $('.customNextBtn--random').click(function() {
        promoOwlRandom.trigger('next.owl.carousel');
      })
      $('.customPrevBtn--random').click(function() {
          promoOwlRandom.trigger('prev.owl.carousel', [300]);
      });
});

$(document).ready(function(){
    $(".news__carousel").owlCarousel({
        items: 2,
        dots: false,
        nav: false,
        margin: 30,
        mouseDrag: true,
        loop: true
    });

    var newsOwlCom = $('.news__carousel');
    newsOwlCom.owlCarousel();
      $('.customNextBtn--comment').click(function() {
        newsOwlCom.trigger('next.owl.carousel');
      })
      $('.customPrevBtn--comment').click(function() {
          newsOwlCom.trigger('prev.owl.carousel', [300]);
      });
});
