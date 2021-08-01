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
    pageWidget(['index', 'product_page', 'choose_tech']);
    getAllClasses('html', '.elements_list');
  }
  // remove jquery and dev_function after work


  function initSliderHero() {
    const swiper = new Swiper('.hero-slider', {
      // Optional parameters
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true,
      // },

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
    var burger = $('.burger');

		function burgerOn() {
			$('.site-container').toggleClass('is-fixed');
			$('.burger').toggleClass('burger--active');
      $('.nav-mod').toggleClass('active');
		};

		burger.on('click', burgerOn);

  }

  function initDropdown(element) {

    const wrapper = document.querySelector(element);

    function dropdown(e) {

      let dropdownBtn = wrapper.querySelector('.dropdown__btn'),
        searchDropdownField = wrapper.querySelector('.dropdown__field'),
        inner = searchDropdownField.firstElementChild.offsetHeight;

      if (e.target.classList.contains('dropdown__btn')) {

        dropdownBtn.classList.toggle('active');

        searchDropdownField.classList.toggle('active');

        searchDropdownField.offsetHeight == inner ? searchDropdownField.style.height = 0 + 'px' :
        searchDropdownField.style.height = inner + 'px';
      }
    }

    if (wrapper) wrapper.addEventListener('click', dropdown)

  }

  function initTabs(element,prefix) {

    let tabWrapper = $(element);

    function tabs(e) {
      // e.preventDefault();
      let target = e.target;

      // check prefix
      if (prefix) {
        tabWrapper.find('.tab__btn').each(function(i) {
          $(this).attr('data-findId', `${prefix + i}`)
        });

        tabWrapper.find('.tab__field').each(function(i) {
          $(this).attr('id', `${prefix + i}`)
        });
      }

      // attr checked on tab__wrapper
      if ($(target).closest('.tab__btn').attr("data-findId") !== undefined) {

        tabWrapper.find('.tab__wrapper').children('.tab__btn').removeClass('tab-active');

        $(target).closest('.tab__btn').addClass('tab-active');

        tabWrapper.children('.tab__field').each(function () {
          $(this).removeClass('field-active');
        });

        // we do id selector when find tab__btn and get hes data attr then just chqnge classs
        $("#" + $(target).closest('.tab__btn').attr("data-findId")).addClass('field-active');
      }
    }

    if (tabWrapper) tabWrapper.click('click', tabs)
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
    initDropdown('.info_dropdown');
    initDropdown('.social_dropdown');
    initTabs('.docs__lane-tab','prefix');
    initPopup();
    widget()
  }

  init();
});
})(window['jQuery'], window, document);
