var dirToggle = 1;

var waveOscillate = function(goingRight){
    //console.log(goingRight);
  distance1 = waveDistance * goingRight;
  distance2 = waveDistance * goingRight * -1;
  $("#wavecontainer1").animate({left:distance1}, 5000);
  $("#wavecontainer2").animate({left:distance2}, 5000);
  setTimeout(function(){
      goingRight *= -1;
      waveOscillate(goingRight);
  }, 5100);
}

var waveDistance = 100;

$(document).ready(function(){
  waveOscillate(dirToggle);
});



