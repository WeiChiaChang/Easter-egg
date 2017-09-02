(function(window){

  "use strict";

  // type 'balloon' on your keyboard
  var key = [66,65,76,76,79,79,78];
  var ck = 0;
  var max = key.length;

  var balloon = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '300px';
    img.style.height = '600px';
    img.style.transition = '13s all';
    img.style.position = 'fixed';
    img.style.right = '-500px';
    img.style.bottom = '0px';
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
    }, 10300);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      balloon();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/balloon.gif"

  init(data)

})(window);
