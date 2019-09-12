////////////////////
// SELECTRIC PLUGIN
////////////////////
(function ($, APP) {
  APP.Plugins.Selectric = {
    init: function () {
      var $select = $('[js-select]');
      if ($select.length === 0) return;

      $select.selectric({
        maxHeight: 300,
        disableOnMobile: false,
        nativeOnMobile: true,
        arrowButtonMarkup: '<b class="button"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.24258 8.46766L14.6921 2.01789C15.1026 1.6076 15.1026 0.942397 14.6921 0.532312C14.282 0.122194 13.6169 0.122194 13.2068 0.532312L7.49989 6.23937L1.79321 0.532478C1.38293 0.12236 0.717829 0.12236 0.307712 0.532478C-0.102571 0.942596 -0.102571 1.60777 0.307712 2.01805L6.75737 8.46783C6.96253 8.67289 7.23113 8.7753 7.49986 8.7753C7.76872 8.7753 8.03752 8.67269 8.24258 8.46766Z" fill="#909090"/></svg></b>',

        onInit: function (element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function (element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper
            .find('.label')
            .data('value', $wrapper.find('.label').html())
            .html($elm.attr('placeholder'));
        },
        onBeforeClose: function (element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        },
      });
    },
  };
})(jQuery, window.APP);
