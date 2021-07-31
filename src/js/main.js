/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 window.addEventListener('DOMContentLoaded', (event) => {

  // remove jquery and dev_function after work
  function widget() {
    pageWidget(['index', 'newPage']);
    getAllClasses('html', '.elements_list');
  }
  // remove jquery and dev_function after work


  function initSlider() {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
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
      initSlider();
      initMenu();
      initPopup();
      widget()
  }

  init();
});
