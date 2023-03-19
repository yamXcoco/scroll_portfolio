document.addEventListener("DOMContentLoaded", function () {
  // 고탑

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 300);
  });
});
