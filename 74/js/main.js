// Greetings selected team member. Please contribute by writing your part fo the code below.

//dropdown menu for mobile
function dropDown() {
  'use strict';
  document.getElementById("dropToggle").addEventListener('click', function () {
    document.getElementById("dropdown").classList.toggle('show');
  });
}
dropDown();
