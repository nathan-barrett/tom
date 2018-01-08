import { Tom } from "./../js/scripts.js";


$(document).ready(function() {
  const tommi = new Tom("Tommi");
  tommi.hungryTom();
  tommi.honryTom();
  tommi.sweepyTom();
  tommi.foodCheck();
  tommi.spankCheck();
  tommi.sleepCheck();
  $('#feed').click(function(){
    tommi.feedMe();
  });
  $('#spank').click(function(){
    tommi.spankMe();
  });
  $('#rest').click(function(){
    tommi.sweepyTime();
  });
});
