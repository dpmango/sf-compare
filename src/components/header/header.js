//////////
// HEADER
//////////

(function ($, APP) {
  APP.Components.Header = {
    init: function () {

      $('.header').hover(
        function () {},
        function () {
          $('#women').removeClass('open');
          $('.wrap-drop-menu.women')
            .removeClass('open')
            .addClass('close');
          $('#men').removeClass('open');
          $('.wrap-drop-menu.men')
            .removeClass('open')
            .addClass('close');
        }
      );

      $(document).on('click', '#men', function () {
        $('#women').removeClass('open');
        $('.wrap-drop-menu.women')
          .removeClass('open')
          .addClass('close');
        $('.wrap-drop-menu.men')
          .toggleClass('open')
          .toggleClass('close');
        $(this).toggleClass('open');
        return false;
      });

      $(document).on('click', '#women', function () {
        $('#men').removeClass('open');
        $('.wrap-drop-menu.men')
          .removeClass('open')
          .addClass('close');
        $('.wrap-drop-menu.women')
          .toggleClass('open')
          .toggleClass('close');
        $(this).toggleClass('open');
        return false;
      });

      $(document).on('click', '.burger', function () {
        $(this).toggleClass('open');
        $('.menu-mob').toggleClass('open');
        $('body').toggleClass('fix');
      });

    },
  };
})(jQuery, window.APP);
