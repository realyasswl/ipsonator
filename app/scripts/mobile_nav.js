jQuery(document).ready(function ($) {
  "use strict";
  // hide both levels of dropdown menu:
  $('.t11-m-nav-secondlevel').css({
    'display': 'none'
  });
  $('.t11-m-nav-toplevel').css({
    'display': 'none'
  });

  // toggle toplevel with menu icon:
  $('.menu-icon').click(function (event) {
    $('.t11-m-nav-toplevel').slideToggle(400);
    event.preventDefault();
  });

  // toggle secondlevel:
  $('.t11-m-nav-category').click(function (event) {
    if ($(this).hasClass('item')) {
      event.stopPropogation(); // follow the link
    } else {
      $(this).find('.t11-m-nav-secondlevel').slideToggle(400);
    }
    event.preventDefault();
  });

  // close the menu when an item is selected:
  $('.t11-m-nav-secondlevel > li').click(function (event) {
    $(this).parent().toggle(300, function (event) {
      $('.t11-m-nav-toplevel').toggle();
    });
    event.stopPropogation();
  });
});
