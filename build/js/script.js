(function () {
  let mob = '(max-width: 767px)';
  let tablet = '(min-width: 768px) and (max-width: 1199px)';
  let desc = '(min-width: 1200px)';
  let current = '';

  function initSwiper() {
    if (window.matchMedia(desc).matches && current !== 'desktop') {
      current = 'desktop';

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        init: false,
        navigation: {
          nextEl: '.partners__button-next',
          prevEl: '.partners__button-prew',
        },
      });
      swiper.init();

    }

    if (window.matchMedia(tablet).matches && current !== 'tablet') {
      current = 'tablet';

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        init: false,
        loop: true,
        effect: 'coverflow',
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      });
      swiper.init();

      var swiperBanner = new Swiper('.main-banner__swiper-container', {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        init: false,
        loop: true,
        effect: 'coverflow',
        pagination: {
          el: '.swiper-pagination__banner',
          clickable: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      });
      swiperBanner.init();
    }

    if (window.matchMedia(mob).matches && current !== 'mobile') {
      current = 'mobile';

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        init: false,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
      });
      swiper.init();

      var swiperBanner = new Swiper('.main-banner__swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        init: false,
        pagination: {
          el: '.swiper-pagination__banner',
          dynamicBullets: true,
          clickable: true,
        },
      });
      swiperBanner.init();
    }

  }

  initSwiper();
}());

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
  burger.addEventListener('click', function () {
    burger.classList.toggle('page-header__burger-active');
  });
  const cont = document.querySelector('.page-header__list');
  burger.addEventListener('click', function () {
    cont.classList.toggle('page-header__nav-active');
  });
}());

