const heartBtn = document.querySelectorAll('[data-heart]');

heartBtn.forEach( function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('btn-heart-active');
    });
});

function getInfoCards() {
    let infoCardInputAll = document.querySelectorAll('[data-input]');
    infoCardInputAll.forEach(function (item) {
        item.addEventListener('click', function() {
            let infoCardTextAll = document.querySelectorAll('[data-text]');
            infoCardTextAll.forEach(function(item) {
                item.style.display='none';
            })
            let a = this.getAttribute('data-input');
            let text = document.querySelector(`[data-text=${CSS.escape(a)}]`);
            text.style.display='block';
        });
    });
};

getInfoCards();

function getInfoCardsSecond() {
    let infoCardInputAll = document.querySelectorAll('[data-input-second]');
    infoCardInputAll.forEach(function (item) {
        item.addEventListener('click', function() {
            let infoCardTextAll = document.querySelectorAll('[data-text-second]');
            infoCardTextAll.forEach(function(item) {
                item.style.display='none';
            })
            let a = this.getAttribute('data-input-second');
            let text = document.querySelector(`[data-text-second=${CSS.escape(a)}]`);
            text.style.display='block';
        });
    });
};

getInfoCardsSecond();