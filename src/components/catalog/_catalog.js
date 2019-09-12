//////////////
// CATALOG
//////////////

(function ($, APP) {
  APP.Components.catalog = {
    init: function () {
      $(document).on('click', '.catalog-menu-toggle', function () {
        $(this).toggleClass('open');
        $('.catalog-menu-wrap').toggleClass('open');
      });
    },
  };
})(jQuery, window.APP);
