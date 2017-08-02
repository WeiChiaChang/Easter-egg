(function(window){

  "use strict"

  // type 'dog' on your keyboard
  let key = [68,79,71]
  let ck = 0
  let max = key.length

  let dog = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '1050px'
    img.style.height = '300px'
    img.style.transition = '7s all'
    img.style.position = 'fixed'
    img.style.left = '-1100px'
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
    }, 7300)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      dog()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/dog.gif'

  init(data)

})(window)
