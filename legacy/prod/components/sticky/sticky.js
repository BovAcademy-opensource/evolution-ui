/** STICKY COMPONENT **/
(function() {
  var stickyElement = document.querySelector('.su_stick');
  var stickyElementLeftPosition = stickyElement && elementAbsolutePosition(stickyElement).docLeftDistance;
  var stickyElementTopPosition = stickyElement && elementAbsolutePosition(stickyElement).docTopDistance;
  var stickyElementEnd = document.querySelector('.su_stick-end');
  var stickyElementEndTopPosition = stickyElement && elementAbsolutePosition(stickyElementEnd).docTopDistance;
  var stuckFlag = false;

  if (stickyElement && stickyElementEnd) {
    window.onscroll = function(e) {
      var elementRelativePosition = stickyElement.getBoundingClientRect();
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementTopPosition) {
        stickyElement.style.position = "fixed";
        stickyElement.style.top = 0;
        stickyElement.style.left = stickyElementLeftPosition + "px";
      } else if ((window.pageYOffset || document.documentElement.scrollTop) < stickyElementTopPosition) {
        stickyElement.style.position = "initial";
      }
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementEndTopPosition - elementRelativePosition.height) {
        stickyElement.style.position = "absolute";
        stickyElement.style.top = elementAbsolutePosition(stickyElementEnd).docTopDistance - elementRelativePosition.height + "px";
        stickyElement.style.left = elementAbsolutePosition(stickyElement).docLeftDistance + "px";
      }
    };
  }
  function elementAbsolutePosition(element) {
    var elementBoundingBox = element.getBoundingClientRect();
    var scrolledLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;
    var scrolledTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    return  {
      docLeftDistance: elementBoundingBox.left + scrolledLeftPosition,
      docTopDistance: elementBoundingBox.top + scrolledTopPosition,
      docBottomDistance: elementBoundingBox.top + scrolledTopPosition
    };
  }
})();
/** END STICKY COMPONENT **/
