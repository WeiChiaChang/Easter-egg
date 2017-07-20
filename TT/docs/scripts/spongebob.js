(function(window){

  "use strict";

  // type 'spongebob' on your keyboard
  var key = [83,80,79,78,71,69,66,79,66];
  // var key = [65]
  var ck = 0;
  var max = key.length;

  var spongebob = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.height = '375px';
    img.style.transition = '6s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
    img.style.bottom = 'calc(-50% + 320px)';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.right = 'calc(50% - 187px)';
    },50);

    window.setTimeout(function(){
      img.style.right = 'calc(100% + 375px)';
    }, 4300);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 7300);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      spongebob();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/spongebob.gif"

  init(data)

})(window);
