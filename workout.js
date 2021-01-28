yoga15 = ["https://www.youtube.com/embed/g_tea8ZNk5A", "https://www.youtube.com/embed/DYY8KovKO3M", "https://www.youtube.com/embed/JgOVqfthILw", "https://www.youtube.com/embed/CKsrfXux9IA", "https://www.youtube.com/embed/utrAlZf_Pjs"]
yoga30 = ["https://www.youtube.com/embed/pavRUoAT1FQ", "https://www.youtube.com/embed/yyYlVOqgj0A", "https://www.youtube.com/embed/TBXffMRU8MM", "https://www.youtube.com/embed/mPYA6_rKdtU", "https://www.youtube.com/embed/5v1wqxnrmrk"]
yoga45 = ["https://www.youtube.com/embed/GLy2rYHwUqY", "https://www.youtube.com/embed/X4MchDHkJWw", "https://www.youtube.com/embed/kV6HfIJiLeE", "https://www.youtube.com/embed/ALO4udhcXuk", "https://www.youtube.com/embed/j-PM39D5vrs"]

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

  function screen15() {   
    document.getElementById('ytVideo').src = yoga15[Math.floor(Math.random() * yoga15.length)];
  };
  function screen30() {   
    document.getElementById('ytVideo').src = yoga30[Math.floor(Math.random() * yoga30.length)];
  };
  function screen45() {   
    document.getElementById('ytVideo').src = yoga45[Math.floor(Math.random() * yoga45.length)];
  };
  