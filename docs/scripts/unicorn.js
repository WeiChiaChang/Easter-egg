(function(window){
  
    "use strict";
  
    // type 'unicorn' on your keyboard
    var key = [85,78,73,67,79,82,78];
    var ck = 0;
    var max = key.length;
  
    var unicorn = function() {
  
      var shock = document.createElement('div');
      var img = new Image();
      img.src = data;
      img.style.width = '375px';
      img.style.height = '375px';
      img.style.transition = '13s all';
      img.style.position = 'fixed';
      img.style.right = '-374px';
      // img.style.bottom = 'calc(-50% + 280px)';
      img.style.top= '100px';
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
        unicorn();
        ck = 0;
      }
  
    };
  
    var init = function(data) {
  
      document.addEventListener('keyup', record);
  
    };
  
    var data = "./images/unicorn.gif"
  
    init(data)
  
  })(window);
  