(function(window){

  "use strict"

  // type 'pikarun' on your keyboard
  let key = [80,73,75,65,82,85,78]
  // let key = [80]
  let ck = 0
  let max = key.length

  let pikaRun = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '450px'
    img.style.height = '350px'
    img.style.transition = '4s all'
    img.style.position = 'fixed'
    img.style.left = '-400px'
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
      pikaRun()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = '../images/running-pikachu.gif'

  init(data)

})(window)
