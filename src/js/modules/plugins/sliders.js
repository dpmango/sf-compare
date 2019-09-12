//////////
// SLIDERS
//////////
(function ($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        featuredProducts: {
          instance: undefined,
          disableOn: 1201,
        },
      },
    },
    init: function () {
      this.initSwipers();
      this.initResponsiveSwipers();
      this.listenResize();
    },
    reinit: function () {
      // without resize listeners double check
      this.initSwipers();
      this.initResponsiveSwipers(true);
    },
    listenResize: function () {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function () {
      // EXAMPLE SWIPER
      new Swiper('[js-slider]', {
        slidesPerView: 4,
        spaceBetween: 65,
        touchEventsTarget: 'wrapper',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1299: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }
      });
      new Swiper('[js-slider2]', {
        slidesPerView: 4,
        spaceBetween: 24,
        touchEventsTarget: 'wrapper',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }
      });
      var galleryThumbs = new Swiper('[js-small-slider]', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      new Swiper('[js-big-slider]', {
        spaceBetween: 10,
        thumbs: {
          swiper: galleryThumbs
        }
      });
    },

    initResponsiveSwipers: function (isHardReset) {
      var featuredProducts = '[js-featured-products-swiper]';
      if ($(featuredProducts).length > 0) {
        this.initFeaturedProductsSwiper(featuredProducts);
      }
    },
    initFeaturedProductsSwiper: function (selector) {
      var dataObj = this.data.responsiveSwipers.featuredProducts;

      if ($(selector).length > 0) {
        if (window.innerWidth >= dataObj.disableOn) {
          if (dataObj.instance !== undefined) {
            dataObj.instance.destroy(true, true);
            dataObj.instance = undefined;
          }
        } else {
          if (dataObj.instance === undefined) {
            dataObj.instance = new Swiper(selector, {
              slidesPerView: 'auto',
              breakpoints: {
                992: {
                  spaceBetween: 0,
                },
              },
            });
          }
        }
      }
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
