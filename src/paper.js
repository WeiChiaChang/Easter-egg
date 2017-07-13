(function(window){

  "use strict"

  // type 'paper' on your keyboard
  let key = [80,65,80,69,82]
  // let key = [80]
  let ck = 0
  let max = key.length

  let paper = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.transition = '6s all linear'
    // img.style.position = 'fixed'
    img.style.left = '400px'
    img.style.top = 'calc(-50% 0px)'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    // window.setTimeout(function(){
    //   img.style.left = 'calc(50% - 200px)'
    // },50)

    // window.setTimeout(function(){
    //   img.style.left = 'calc(100% + 500px)'
    // }, 50)

    window.setTimeout(function(){
      img.parentNode.removeChild(img)
    }, 5000)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      paper()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = './images/paper.gif'

  init(data)

})(window)
