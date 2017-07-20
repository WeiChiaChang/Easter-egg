/*
 * pikachu.js
 * Embed this script on any web page, then type "pikachu" on your keyboard
 * to unleash some lightning.
 *
 * All rights and trademarks for "Pikachu" belong to Nintendo, Inc.
 */
(function(window){

  "use strict";

  // type 'britney' on your keyboard
  var key = [66,82,73,84,78,69,89];
  var ck = 0;
  var max = key.length;

  var britney = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '250px';
    img.style.height = '180px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 125px)';
    img.style.bottom = '-149px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '0px';
    },50);

    // window.setTimeout(function(){
    //   shock.style.width="100%";
    //   shock.style.height="100%";
    //   shock.style.left = 0;
    //   shock.style.top = 0;
    //   shock.style.position="fixed";
    //   shock.style.zIndex=9999999;
    //   shock.style.background = '#fffb95';
    //   shock.style.opacity = 0;
    //
    //   document.body.appendChild(shock);
    //
    //   for ( var x = 0; x<81; x++ ) {
    //     (function(x){
    //       window.setTimeout(function(){
    //         if ( x % 2 === 0 ) {
    //           shock.style.opacity = 0;
    //         } else {
    //           shock.style.opacity = 0.3;
    //         }
    //       },x * 25);
    //     })(x)
    //   }
    //
    // },2500);

    window.setTimeout(function(){
      img.style.bottom = '-149px';
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
      britney();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = '../images/britney.gif';

    init(data);

})(window);
