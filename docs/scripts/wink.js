(function(window){
  
    "use strict";
  
    // type 'wink' on your keyboard
    var key = [87,73,78,75];
    var ck = 0;
    var max = key.length;
  
    var wink = function() {
  
      var shock = document.createElement('div');
      var img = new Image;
      img.src = data;
      img.style.width = '300px';
      img.style.height = '300px';
      img.style.transition = '1s all';
      img.style.position = 'fixed';
      img.style.left = 'calc(50% - 300px)';
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
        wink();
        ck = 0;
      }
  
    };
  
    var init = function(data) {
      document.addEventListener('keyup', record);
    };
  
    var data = './images/wink.gif';
  
    init(data);
  
  })(window);
  