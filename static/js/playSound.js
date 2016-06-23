// load buffers and play sounds

function playSound(){
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();

  var fileList = new Array(24);
  for(var i=0; i<12; i++){
    fileList[i] = "static/sounds/maj"+i+".mp3";
    fileList[i+12] = "static/sounds/min"+i+".mp3";
  }
  bufferLoader = new BufferLoader(context, fileList, function(){});
  bufferLoader.load();

  for(var i=0; i<12; i++){
    (function(k){
      document.getElementById("maj"+String(k)).onclick = function(){
        var source = context.createBufferSource();
        source.buffer = bufferLoader.bufferList[k];
        source.connect(context.destination);
        source.start(0);
      };
    })(i);
    (function(k){
      document.getElementById("min"+String(k)).onclick = function(){
        var source = context.createBufferSource();
        source.buffer = bufferLoader.bufferList[k+12];
        source.connect(context.destination);
        source.start(0);
      };
    })(i);
  }
}
