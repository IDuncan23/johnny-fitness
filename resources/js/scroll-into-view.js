// function to establish variables, gather elements w 'hidden' class
var animateHTML = function() {
  var elems,
    windowHeight
  var init = function() {
    elems = document.getElementsByClassName('hidden')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  // establish event listeners to trigger functions
  var _addEventHandlers = function() {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  // check position of element before changing class name
  var _checkPosition = function() {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'scroll-in-element')
      }
    }
  }
  return {
    init: init
  }
}
// call functions
animateHTML().init()
