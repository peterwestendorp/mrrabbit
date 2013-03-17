$(function(){
  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", function(ev){
      handleOrientationEvent(ev.beta, ev.gamma, ev.alpha);
    }, false);
  }

  var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees){
    console.log(Math.round(frontToBack));
    console.log(Math.round(leftToRight));
    $('*[data-orientation-layer]').each(function(i, elm){
      if($(elm).data('orientation-layer') === 1){
        $(elm).css('transform', 'translateX('+Math.round(leftToRight)+'px) translateY('+frontToBack+'px)');
      }
      else if($(elm).data('orientation-layer') === 2){
        $(elm).css('transform', 'translateX('+Math.round(leftToRight/2)+'px) translateY('+(frontToBack/2)+'px)');
      }
      else if($(elm).data('orientation-layer') === 3){
        $(elm).css('transform', 'translateX('+Math.round(leftToRight/3)+'px) translateY('+(frontToBack/3)+'px)');
      }
    });
  };
});
