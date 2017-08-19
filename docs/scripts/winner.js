(function(window){

  "use strict";

  // type 'winner' on your keyboard
  var key = [87,73,78,78,69,82];
  var ck = 0;
  var max = key.length;

  var winner = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '450px';
    img.style.height = '400px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 200px)';
    img.style.bottom = '-400px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '-65px';
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
      winner();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = './images/winner.gif';

  init(data);

})(window);
