$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        items: 1,
        dots: false,
        dotsData: true,
        nav: false,
        margin: 10,
        mouseDrag: false
    });
    var headerowl = $('.header__carousel');
    headerowl.owlCarousel();
    // Go to the next item
      $('.customNextBtn').click(function() {
          headerowl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.customPrevBtn').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          headerowl.trigger('prev.owl.carousel', [300]);
      })
});

const btnHeaderNext = document.querySelector('.customNextBtn');
const btnHeaderPrev = document.querySelector('.customPrevBtn');
let dotsHeaderActive = document.querySelector('#header-carousel-active-dots');
let dotsHeader = document.querySelector('#header-carousel-dots');


function HeaderCarousel () {
    let slideHeader = document.querySelectorAll('.header__carousel-item').length;
    dotsHeader.textContent = `/${slideHeader}`;
    dotsHeaderActive.value = 1;
    let result;
    
    btnHeaderNext.addEventListener('click', function() {
        if (slideHeader > dotsHeaderActive.value) {
            result = parseInt(dotsHeaderActive.value + 1);
            return;
        }
    });

    btnHeaderPrev.addEventListener('click', function() {
        if (dotsHeaderActive.value > 1) {
            result = parseInt(dotsHeaderActive.value - 1);
            return;
        }
    });

    dotsHeaderActive.textContent = dotsHeaderActive.value;
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
