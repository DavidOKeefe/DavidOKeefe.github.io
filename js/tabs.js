$(document).ready(function () {
  $(".tabs li").click(function(event) {
    event.preventDefault();
    $(".tabs li").removeClass("active");
    $(this).toggleClass("active");
  });
  $(".tabs li a").click(function(event) {
    var href = $(this).attr("href");
    $("#bingo, #cheat_sheet, #256, #sift, #movie_reviews").addClass("tab-content");
    $(href).removeClass("tab-content");
  });
});
