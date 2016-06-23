// main.js

window.onload = function(){

  setStyle();
  playSound();

  var center = 0;

  document.getElementById("flat").onclick = function(){
    var move = -1;
    rotate(center, move);
    center += move;
  };

  document.getElementById("sharp").onclick = function(){
    var move = +1;
    rotate(center, move);
    center += move;
  };

};
