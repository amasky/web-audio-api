// init each location and color of buttons

function setStyle(){

  // outer cirle
  var p1 = document.querySelectorAll(".outer a");
  var c1 = document.querySelectorAll(".outer a span");

  // inner circle
  var p2 = document.querySelectorAll(".inner a");
  var c2 = document.querySelectorAll(".inner a span");

  for(var i=0; i<12; i++) {
    c1[i].id = "maj" + i;
    theta1 = (360*i/12).toFixed(1);
    c1[i].style.backgroundColor = "hsla("+theta1+", 95%, 55%, 1)";
    c1[i].style.borderColor = "hsla("+theta1+", 95%, 55%, 1)";

    c2[i].id = "min" + i;
    theta2 = (90 + 360*i/12).toFixed(1);
    c2[i].style.backgroundColor = "hsla("+theta2+", 50%, 60%, 1)";
    c2[i].style.borderColor = "hsla("+theta2+", 50%, 60%, 1)";

    theta = -0.5*Math.PI - 2*i*Math.PI/12;
    p1[i].style.left = (50 - 35*Math.cos(theta)).toFixed(4) + "%";
    p1[i].style.top = (50 + 35*Math.sin(theta)).toFixed(4) + "%";
    p2[i].style.left = (50 - 23*Math.cos(theta)).toFixed(4) + "%";
    p2[i].style.top = (50 + 23*Math.sin(theta)).toFixed(4) + "%";
  }
}


function rotate(center, move) {

  function setLoc(center, delta) {
    var p1 = document.querySelectorAll(".outer a");
    var c1 = document.querySelectorAll(".outer a span");
    var p2 = document.querySelectorAll(".inner a");
    var c2 = document.querySelectorAll(".inner a span");

    for(var i=0; i<12; i++) {
      j = (i-center-delta) % 12;
      theta = -0.5*Math.PI - 2*j*Math.PI/12;
      p1[i].style.left = (50 - 35*Math.cos(theta)).toFixed(4) + "%";
      p1[i].style.top = (50 + 35*Math.sin(theta)).toFixed(4) + "%";
      p2[i].style.left = (50 - 23*Math.cos(theta)).toFixed(4) + "%";
      p2[i].style.top = (50 + 23*Math.sin(theta)).toFixed(4) + "%";
    }
  }

  var start = 0;
  var duration = 500;

  function update() {
    var currentTime = Date.now();
    var progress = (currentTime - start) / duration;
    setLoc(center, move*progress);
    if (progress <= 1)
      requestAnimationFrame(update);
  }

  start = Date.now();
  requestAnimationFrame(update);

}
