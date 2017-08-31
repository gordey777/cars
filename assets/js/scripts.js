$(document).ready(function() {
  $('.go_to').click(function() { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });

  var $menu = $(".menuholder");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
      $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("default");
    }
  }); //scroll
});
//TABS
(function($) {

  var tabs = $(".tabs li .singletype");

  tabs.click(function() {
    var content = this.hash.replace('/', '');

    tabs.removeClass("activ");
    $(this).addClass("activ");
    $("#content").find('p').hide();
    $(content).fadeIn(300);
  });

})(jQuery);
