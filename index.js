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
  $('#meetingPeopleDiv').hover(function () {
    $(this).find('#meetingOthersLabel').removeClass("hiddenLabel");
    $(this).find('#meetingOthersLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#meetingOthersLabel').addClass("hiddenLabel");
    $(this).find('#meetingOthersLabel').removeClass("projectLabel");
  });
  $('#txGeneticsDiv').hover(function () {
    $(this).find('#txGeneticsLabel').removeClass("hiddenLabel");
    $(this).find('#txGeneticsLabel').addClass("projectLabel");
  }, function () {
    $(this).find('#txGeneticsLabel').addClass("hiddenLabel");
    $(this).find('#txGeneticsLabel').removeClass("projectLabel");
  });
});

const modalNav = document.getElementById("myNav")
const openMenu = (x) => {
  x.classList.toggle("change")
}



