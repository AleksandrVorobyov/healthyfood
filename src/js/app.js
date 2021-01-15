const heartBtn = document.querySelectorAll('[data-heart]');


heartBtn.forEach( function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('btn-heart-active');
    });
});

