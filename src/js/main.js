/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 (($, window, document, undefined) => {
  $(() => {

  // remove jquery and dev_function after work
  function widget() {
    pageWidget(['index', 'product_page']);
    getAllClasses('html', '.elements_list');
  }
  // remove jquery and dev_function after work


  function initSliderHero() {
    const swiper = new Swiper('.hero-slider', {
      // Optional parameters
      // slidesPerView: 1,
      clickable: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  function initSliderEquipment() {
    const swiper = new Swiper('.equipment-slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      clickable: true,
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },

        1023: {
          slidesPerView: 3,
        }
      },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  function initSliderServices() {
    const swiper = new Swiper('.services-slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      clickable: true,
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },

        1023: {
          slidesPerView: 3,
        }
      },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  function initSliderSeeMore() {
    const swiper = new Swiper('.see-more-slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      clickable: true,
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },

        1023: {
          slidesPerView: 3,
        }
      },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  function initMenu() {
      // code
  }

  function initPopup() {

  }

  /**
   * Initializes logic of a page.
   */
  function init() {
      initSliderHero();
      initSliderEquipment();
      initSliderServices();
      initSliderSeeMore();
      initMenu();
      initPopup();
      widget()
  }

  init();
});
})(window['jQuery'], window, document);
