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

const targets = document.querySelectorAll('.rotating-target');
const wrapper = document.querySelector('.ball-split');

let animationFrame;
let angle = 0;
let isHovered = false;

function rotateStep() {
  if (!isHovered) return;

  angle += 2;
  targets.forEach(target => {
    target.style.transform = `rotate(${angle}deg)`;
  });
  animationFrame = requestAnimationFrame(rotateStep);
}

wrapper.addEventListener('mouseenter', () => {
  isHovered = true;
  cancelAnimationFrame(animationFrame);
  targets.forEach(target => {
    target.style.transition = 'none'; // отключаем transition во время вращения
  });
  rotateStep();
});

wrapper.addEventListener('mouseleave', () => {
  isHovered = false;
  cancelAnimationFrame(animationFrame);
  targets.forEach(target => {
    target.style.transition = 'transform 1.2s ease';
    target.style.transform = 'rotate(0deg)';
  });
  angle = 0;
});
