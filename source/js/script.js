(function () {
  var isMobile = false;
  $(document).ready(function () {
    if ($('body').width() <= 1200) {
      isMobile = true;
    }
    if (isMobile) {
      $(document).ready(function () {
        $('.services__title').click(function () {
          $('.services__items').not($(this).next()).removeClass('services__items--active');
          $(this).next().toggleClass('services__items--active');
          $('.services__title').removeClass('services__items-active');
          $(this).toggleClass('services__items-active');
        });
      });
    }
  });
})();

(function () {
  const burger = document.querySelector('.page-header__burger');
  burger.addEventListener('click', function() {
    burger.classList.toggle('page-header__burger-active');
  });
  const cont = document.querySelector('.page-header__list');
  burger.addEventListener('click', function() {
    cont.classList.toggle('page-header__nav-active');
  });
}());
