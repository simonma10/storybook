(function() {

  var back;
  var next;
  var home;

  enableButtons();

  /**
   * Turns on the back and next buttons.
   */
  function enableButtons() {
    back = document.getElementById('backArrow');
    back.style.cursor = 'pointer';
    back.onclick = function() {
      ee.emitEvent('back');
    };

    next = document.getElementById('nextArrow');
    next.style.cursor = 'pointer';
    next.onclick = function() {
      ee.emitEvent('next');
    };

    home = document.getElementById('homeBtn');
    home.style.cursor = 'pointer';
    home.onclick = function() {
      goHome();
    };
  }

})(this);
