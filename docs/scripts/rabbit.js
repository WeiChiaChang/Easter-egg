(function(window){

  "use strict";

  // type 'rabbit' on your keyboard
  var key = [82,65,66,66,73,84];
  var ck = 0;
  var max = key.length;

  var rabbit = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.height = '375px';
    img.style.transition = '6s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
    img.style.bottom = 'calc(-50% + 350px)';
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
      rabbit();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "./images/rabbit.gif"

  init(data)

})(window);
