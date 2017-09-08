(function(window){

  "use strict"

  // type 'hippo' on your keyboard
  let key = [72,73,80,80,79]
  let ck = 0
  let max = key.length

  let hippo = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '300px'
    img.style.height = '350px'
    img.style.transition = '8s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
    // img.style.bottom = 'calc(-50% + 300px)'
    img.style.bottom = '0px'
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
      hippo()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/hippo.gif'

  init(data)

})(window)
