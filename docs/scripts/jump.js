(function(window){

  "use strict";

  // type 'jump' on your keyboard
  var key = [74,85,77,80];
  var ck = 0;
  var max = key.length;

  var jump = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '350px';
    img.style.height = '300px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 180px)';
    img.style.bottom = '-450px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '0px';
    },30);

    window.setTimeout(function(){
      img.style.bottom = '-450px';
    }, 4300);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 5400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      jump();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = './images/jump.gif';

  init(data);

})(window);
