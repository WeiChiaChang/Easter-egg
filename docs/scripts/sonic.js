(function(window){

  "use strict"

  // type 'sonic' on your keyboard
  let key = [83,79,78,73,67]
  // let key = [83]
  let ck = 0
  let max = key.length

  let sonic = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '150px'
    img.style.height = '150px'
    img.style.transition = '5s all'
    img.style.position = 'fixed'
    img.style.left = '-200px'
    img.style.bottom = 'calc(-50% + 320px)'
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
    }, 4300)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      sonic()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/sonic.gif'

  init(data)

})(window)
