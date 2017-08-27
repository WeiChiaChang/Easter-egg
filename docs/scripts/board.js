(function(window){

  "use strict"

  // type 'board' on your keyboard
  let key = [66,79,65,82,68]
  let ck = 0
  let max = key.length

  let board = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '350px'
    img.style.height = '350px'
    img.style.transition = '6s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
    img.style.bottom = '-40px'
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
      board()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/board.gif'

  init(data)

})(window)
