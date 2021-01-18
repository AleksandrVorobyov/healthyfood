const btnFooterCopy = document.querySelector('[data-btn-copy]');
const footerCopyLast = document.querySelector('[data-footer-last]');

btnFooterCopy.addEventListener('click', function(item) {
    this.classList.toggle('footer__btn-copy--active');
    footerCopyLast.classList.toggle('footer__copy-last--active');
})