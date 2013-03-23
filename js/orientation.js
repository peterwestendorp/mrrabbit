$(function(){
  var $layers = $('*[data-orientation-layer]');

  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", function(ev){
      handleOrientationEvent(ev.beta, ev.gamma, ev.alpha);
    }, false);
  }

  var handleOrientationEvent = function(ftb, ltr, rotateDegrees){
    var frontToBack = Math.round(ftb),
        leftToRight = Math.round(ltr);

    $('.scene').css('perspective-origin', ((leftToRight+10)*10)+'px '+((frontToBack+10)*10)+'px')
  };
});
