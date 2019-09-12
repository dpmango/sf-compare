////////////
// WAYPOINTS
////////////
(function ($, APP) {
  APP.Plugins.Waypoints = {
    init: function () {

      // if ($('.page').hasClass('catalog-page')) {

      //   new Waypoint({
      //     element: document.getElementById('catalog-start'),
      //     handler: function (direction) {
      //       if (direction == "down") {
      //         $('.catalog-menu').addClass('fix');
      //       } else {
      //         $('.catalog-menu').removeClass('fix');
      //       }
      //     },
      //     offset: 81
      //   });

      //   new Waypoint({
      //     element: document.getElementById('catalog-end'),
      //     handler: function (direction) {
      //       if (direction == "down") {
      //         $('.catalog-menu').removeClass('fix');
      //         $('.catalog-menu').addClass('down');
      //       } else {
      //         $('.catalog-menu').addClass('fix')
      //         $('.catalog-menu').removeClass('down');
      //       }
      //     },
      //     offset: '100%'
      //   });

      // }

    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
