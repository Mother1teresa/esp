$(document).ready(function () {
  // $("select").niceSelect();

  $(".header__burger").on("click", function (evt) {
    let $this = $(this);
    $(".header__menu-container").slideToggle();
  });

  $(".areas-right__item").mouseover(function () {
    const $this = $(this);
    let animeId;
    switch ($this.attr("class").split(" ")[1]) {
      case "anim-one":
        animeId = 0;
        break;
      case "anim-two":
        animeId = 1;
        break;
      case "anim-three":
        animeId = 2;
        break;
      case "anim-four":
        animeId = 3;
        break;
    }
    $(".areas-left__animation > div").each(function () {
      $(this).css("display", "none");
    });
    $(".areas-left__animation > div")[animeId].style.display = "flex";
  });
});
