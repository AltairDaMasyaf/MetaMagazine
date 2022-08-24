const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#hero");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top && $(window).width() <= 768) {
        $(".nav").css("border-bottom", "2px solid #ff48fa");
        $(".nav").css("backdrop-filter", "blur(5px)");
      } else {
        $(".nav").css("border", "none");
        $(".nav").css("backdrop-filter", "blur(0px)");
      }
    });
  }
  $(".nav__toggler").click(function () {
    $(".nav").toggleClass("nav-clicked");
  });
});
