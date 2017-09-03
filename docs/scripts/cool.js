(function(window){

  "use strict";

  // type 'cool' on your keyboard
  var key = [67,79,79,76];
  var ck = 0;
  var max = key.length;

  var cool = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '400px';
    img.style.height = '400px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 200px)';
    img.style.bottom = '0px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '0px';
    },30);

    window.setTimeout(function(){
      img.style.bottom = '-600px';
    }, 4300);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      // shock.parentNode.removeChild(shock);
    }, 5400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      cool();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = './images/cool.gif';

  init(data);

})(window);
