(function(window){

  "use strict";

  // type 'salamander' on your keyboard
  var key = [83,65,76,65,77,65,78,68,69,82];
  var ck = 0;
  var max = key.length;

  var salamander = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.height = '375px';
    img.style.transition = '13s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
    img.style.bottom = 'calc(-50% + 320px)';
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
      salamander();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/Salamander.gif"

  init(data)

})(window);
