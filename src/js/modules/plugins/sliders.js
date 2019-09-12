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
        slidesPerView: 'auto',
        touchEventsTarget: 'wrapper',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
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
