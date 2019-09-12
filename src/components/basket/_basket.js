//////////////
// BASKET
//////////////

(function ($, APP) {
  APP.Components.basket = {
    init: function () {
      $(document).on('click', '.minus', function () {
        let current_numb = $(this).parent().find('.numb').html();
        if (current_numb > 1) {
          +current_numb--;
          $(this).parent().find('.numb').html(current_numb);
        }
      });
      $(document).on('click', '.plus', function () {
        let current_numb = $(this).parent().find('.numb').html();
        if (current_numb < 99) {
          +current_numb++;
          $(this).parent().find('.numb').html(current_numb);
        }
      });
      $(document).on('click', '.products__remove', function () {
        $(this).parents('.products__item').remove();
      });
    },
  };
})(jQuery, window.APP);
