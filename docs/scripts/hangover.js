(function(window){

  "use strict"

  // type 'hangover' on your keyboard
  let key = [72,65,78,71,79,86,69,82]
  let ck = 0
  let max = key.length

  let hangover = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '400px'
    img.style.height = '350px'
    img.style.transition = '8s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
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
      hangover()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/hangover.gif'

  init(data)

})(window)
