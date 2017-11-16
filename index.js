$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  $("#changeBackground").click(function () {
    $("body").toggleClass("changeBackground");
    $("#adjustIconColor").toggleClass("adjustIconColor")
  });
  $('#runDiv').hover(function () {
    $(this).find('#runLabel').removeClass("hiddenLabel");
    $(this).find('#runLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#runLabel').addClass("hiddenLabel");
    $(this).find('#runLabel').removeClass("projectLabel");
  });
  $('#txGeneticsDiv').hover(function () {
    $(this).find('#txGeneticsLabel').removeClass("hiddenLabel");
    $(this).find('#txGeneticsLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#txGeneticsLabel').addClass("hiddenLabel");
    $(this).find('#txGeneticsLabel').removeClass("projectLabel");
  });
  $('#whatsforlunchDiv').hover(function () {
    $(this).find('#whatsforlunchLabel').removeClass("hiddenLabel");
    $(this).find('#whatsforlunchLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#whatsforlunchLabel').addClass("hiddenLabel");
    $(this).find('#whatsforlunchLabel').removeClass("projectLabel");
  });
  $('#movieDbDiv').hover(function () {
    $(this).find('#movieDbLabel').removeClass("hiddenLabel");
    $(this).find('#movieDbLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#movieDbLabel').addClass("hiddenLabel");
    $(this).find('#movieDbLabel').removeClass("projectLabel");
  });
});

const modalNav = document.getElementById("myNav")
const openMenu = (x) => {
  x.classList.toggle("change")
}



