var aboutCount = 0;
function revealAbout () {
  aboutCount = aboutCount + 1;
  if(aboutCount == 1) {
    $(".aboutblob").removeClass("hidden");
  }
  if(aboutCount == 2) {
    $(".aboutblob").addClass("hidden");
  aboutCount = 0;
  }
}
$(".button").click(revealAbout);

var popCount = 0;
function revealPop () {
  popCount = popCount + 1;
  if(popCount == 1) {
    $("#henrypop").removeClass("hidden");
  }
  if(popCount == 2) {
    $("#henrypop").addClass("hidden");
  popCount = 0;
  }
}
$("#pigeon1").click(revealPop);

var popCount = 0;
function revealPop2 () {
  popCount = popCount + 1;
  if(popCount == 1) {
    $("#babkapop").removeClass("hidden");
  }
  if(popCount == 2) {
    $("#babkapop").addClass("hidden");
  popCount = 0;
  }
}
$("#pigeon2").click(revealPop2);
