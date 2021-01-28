/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function timeFunction() {
    document.getElementById("timeDropdown").classList.toggle("show");
  }
function typeFunction() {
    document.getElementById("typeDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function screen() {
    document.getElementsByClassName("screen").src = "https://www.youtube.com/embed/61iKnKtwpUM"
  };