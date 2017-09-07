(function(window){

  "use strict"

  // type 'pokeball' on your keyboard
  let key = [80,79,75,69,66,65,76,76]
  let ck = 0
  let max = key.length

  let pokeball = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '500px'
    img.style.height = '350px'
    img.style.transition = '8s all linear'
    img.style.position = 'fixed'
    img.style.left = '-450px'
    // img.style.bottom = 'calc(-50% + 300px)'
    img.style.bottom = '-10px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    // window.setTimeout(function(){
    //   img.style.left = 'calc(50% - 200px)'
    // },50)

    window.setTimeout(function(){
      img.style.left = 'calc(100% + 500px)'
    }, 50)

    window.setTimeout(function(){
      img.parentNode.removeChild(img)
    }, 8000)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      pokeball()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/pokeball.gif'

  init(data)

})(window)
