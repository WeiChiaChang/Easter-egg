(function(window){

  "use strict"

  // type 'doggy' on your keyboard
  let key = [68,79,71,71,89]
  let ck = 0
  let max = key.length

  let doggy = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '450px'
    img.style.height = '350px'
    img.style.transition = '4s all linear'
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
      doggy()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/doggy.gif'

  init(data)

})(window)
