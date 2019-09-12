//////////////
// NEW-ARRIVAL
//////////////

(function ($, APP) {
  APP.Components.new_arrival = {
    init: function () {
      $(document).on('click', '.new-arrival-tab-link li button', function () {
        $(".new-arrival-tab-link li")
          .removeClass('active');
        $(this)
          .parent()
          .addClass('active');
        let current_tab = $(this).parent().index();
        $('.new-arrival-tab')
          .removeClass('new-arrival-tab_active');
        $('.new-arrival-tab')
          .eq(current_tab)
          .addClass('new-arrival-tab_active');
      });
    },
  };
})(jQuery, window.APP);
