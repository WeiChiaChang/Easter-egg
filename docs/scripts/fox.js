(function(window){

  "use strict";

  // type 'fox' on your keyboard
  var key = [70,79,88];
  var ck = 0;
  var max = key.length;

  var fox = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '500px';
    img.style.height = '400px';
    img.style.transition = '30s all';
    img.style.position = 'fixed';
    img.style.right = '-400px';
    img.style.bottom = 'calc(-50% + 280px)';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.right = 'calc(100% + 500px)';
    }, 50);

    // window.setTimeout(function(){
    //   img.style.right = 'calc(100% + 375px)';
    // }, 4500);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 30300);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      fox();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/fox.gif"

  init(data)

})(window);
