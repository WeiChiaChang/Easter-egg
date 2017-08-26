(function(window){

  "use strict";

  // type 'snorlax' on your keyboard
  var key = [83,78,79,82,76,65,88];
  var ck = 0;
  var max = key.length;

  var snorlax = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.height = '375px';
    img.style.transition = '13s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
    img.style.bottom = '-10px';
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
      snorlax();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/snorlax.gif"

  init(data)

})(window);
