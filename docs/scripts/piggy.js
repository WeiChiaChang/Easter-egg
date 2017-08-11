(function(window){

  "use strict"

  // type 'piggy' on your keyboard
  let key = [80,73,71,71,89]
  // let key = [67]
  let ck = 0
  let max = key.length

  let piggy = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '400px'
    img.style.height = '350px'
    img.style.transition = '6s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
    img.style.bottom = 'calc(-50% + 300px)'
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
    }, 6000)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      piggy()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/piggy.gif'

  init(data)

})(window)
