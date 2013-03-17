$(function(){
  var threshold = 5;

  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", function(ev){
      handleOrientationEvent(ev.beta, ev.gamma, ev.alpha);
    }, false);
  }

  var handleOrientationEvent = function(ftb, ltr, rotateDegrees){
    var frontToBack = Math.round(ftb),
        leftToRight = Math.round(ltr);

    if((frontToBack > threshold || frontToBack < (0-threshold)) || (leftToRight > threshold || leftToRight < (0-threshold))){
      $('*[data-orientation-layer]').each(function(i, elm){
        var layer = $(elm).data('orientation-layer');
        if(layer === 1){
          $(elm).css('transform', 'translateX('+(leftToRight+10)+'px) translateY('+(frontToBack+10)+'px)');
        }
        else if(layer === 2){
          $(elm).css('transform', 'translateX('+((leftToRight/2)+10)+'px) translateY('+((frontToBack/2)+10)+'px)');
        }
        else if(layer === 3){
          $(elm).css('transform', 'translateX('+((leftToRight/3)+10)+'px) translateY('+((frontToBack/3)+10)+'px)');
        }
      });
    }
  };
});
