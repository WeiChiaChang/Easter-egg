(function(window){
  
    "use strict";
    // type 'kumamon' on your keyboard
    var key = [75,85,77,65,77,79,78];
    var ck = 0;
    var max = key.length;
  
    var kumamon = function() {
  
      var shock = document.createElement('div');
      var img = new Image;
      img.src = data;
      img.style.width = '400px';
      img.style.height = '500px';
      img.style.transition = '10s all';
      img.style.position = 'fixed';
      img.style.left = 'calc(50% - 200px)';
      img.style.bottom = '-200px';
      img.style.zIndex = 999999;
  
      document.body.appendChild(img);
  
      window.setTimeout(function(){
        img.style.bottom = '0px';
      },30);
  
      window.setTimeout(function(){
        img.style.bottom = '-600px';
      }, 18300);
      window.setTimeout(function(){
        img.parentNode.removeChild(img);
        shock.parentNode.removeChild(shock);
      }, 30400);
  
    };
  
    var record = function(e) {
  
      if ( e.which === key[ck] ) {
        ck++;
      } else {
        ck = 0;
      }
  
      if ( ck >= max ) {
        kumamon();
        ck = 0;
      }
  
    };
  
    var init = function(data) {
      document.addEventListener('keyup', record);
    };
  
    var data = './images/kumamon.gif';
  
    init(data);
  
  })(window);
  