(function(window){

  "use strict";

  // type 'hiphop' on your keyboard
  var key = [72,73,80,72,79,80];
  var ck = 0;
  var max = key.length;

  var hiphop = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.height = '375px';
    img.style.transition = '20s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
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
    }, 19300);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      hiphop();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/hiphop.gif"

  init(data)

})(window);
