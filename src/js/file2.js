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

