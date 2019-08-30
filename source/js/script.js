(function () {
})();

(function () {
  const burger = document.querySelector('.page-header__burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('page-header__burger-active');
  });
  const cont = document.querySelector('.page-header__list');
  burger.addEventListener('click', () => {
    cont.classList.toggle('page-header__nav-active');
  });
}());
