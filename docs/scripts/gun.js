(function(window){

  "use strict"

  // type 'gun' on your keyboard
  let key = [71,85,78]
  let ck = 0
  let max = key.length

  let gun = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '600px'
    img.style.height = '500px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = '-374px'
    img.style.bottom = 'calc(-50% + 400px)'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function(){
      img.style.left = 'calc(50% - 300px)'

      // $('body').css('background', 'salmon')

    }, 50)

    window.setTimeout(function(){
      img.style.left = 'calc(120% + 300px)'

      // $('body').css('background', 'transparent')

    }, 4000)
    window.setTimeout(function(){
      img.parentNode.removeChild(img)


    }, 5000)

  };

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      gun()
      ck = 0
    }

  };

  let init = function (data) {
    document.addEventListener('keyup', record)
  };

  let data = './images/gun.gif'

  init(data)

})(window)
