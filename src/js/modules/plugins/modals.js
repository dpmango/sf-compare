//////////
// MODALS
//////////
(function ($, APP) {
  APP.Plugins.Modals = {
    init: function () {
      $('[data-fancybox]').fancybox({
        // Options will go here
      });
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
