//////////////
// FOOTER
//////////////

(function ($, APP) {
  APP.Components.footer = {
    init: function () {
      let now = new Date();
      $('#year').html(now.getFullYear());
    },
  };
})(jQuery, window.APP);
