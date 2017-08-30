(function(window){

  "use strict";

  // type 'no' on your keyboard
  var key = [78,79];
  var ck = 0;
  var max = key.length;

  var no = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '500px';
    img.style.height = '500px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 250px)';
    img.style.bottom = '-600px';
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
      no();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = './images/no.gif';

  init(data);

})(window);
