length15 = ["https://www.youtube.com/embed/g_tea8ZNk5A", "https://www.youtube.com/embed/DYY8KovKO3M", "https://www.youtube.com/embed/JgOVqfthILw", "https://www.youtube.com/embed/CKsrfXux9IA", "https://www.youtube.com/embed/utrAlZf_Pjs", "https://www.youtube.com/embed/VHyGqsPOUHs", "https://www.youtube.com/embed/MxLL9Scvmzo", "https://www.youtube.com/embed/MxLL9Scvmzo", "https://www.youtube.com/embed/1skBf6h2ksI", "https://www.youtube.com/embed/0DSrudz6IVY", "https://www.youtube.com/embed/i4GZvBKbylY", "https://www.youtube.com/embed/PRqmsRBVwfs", "https://www.youtube.com/embed/ZbSbvm2PmG4", "https://www.youtube.com/embed/06msLl_wMtM", "https://www.youtube.com/embed/Lk-8YDHtdzc"]
length30 = ["https://www.youtube.com/embed/pavRUoAT1FQ", "https://www.youtube.com/embed/yyYlVOqgj0A", "https://www.youtube.com/embed/TBXffMRU8MM", "https://www.youtube.com/embed/mPYA6_rKdtU", "https://www.youtube.com/embed/5v1wqxnrmrk", "https://www.youtube.com/embed/1skBf6h2ksI", "https://www.youtube.com/embed/-YJXpabrX4k", "https://www.youtube.com/embed/3DAQIK6IyOo", "https://www.youtube.com/embed/CBWQGb4LyAM", "https://www.youtube.com/embed/LueYlLt1l9M", "https://www.youtube.com/embed/vI1Yf-MBczI", "https://www.youtube.com/embed/xM9Uo9EJHs8", "https://www.youtube.com/embed/5IfKSnhbMdo", "https://www.youtube.com/embed/MjPVPDBJ94A", "https://www.youtube.com/embed/IFQmOZqvtWg"]
length45 = ["https://www.youtube.com/embed/GLy2rYHwUqY", "https://www.youtube.com/embed/X4MchDHkJWw", "https://www.youtube.com/embed/kV6HfIJiLeE", "https://www.youtube.com/embed/ALO4udhcXuk", "https://www.youtube.com/embed/j-PM39D5vrs", "https://www.youtube.com/embed/_Zem0_qsDg0", "https://www.youtube.com/embed/JeYP5sySvJs", "https://www.youtube.com/embed/SDhyfxf81nU", "https://www.youtube.com/embed/SuMDenIN5s8", "https://www.youtube.com/embed/Ex903MupqNk", "https://www.youtube.com/embed/jfQQ7tswfdM", "https://www.youtube.com/embed/-ulpYfBNDlM", "https://www.youtube.com/embed/UkwonvfOLEc", "https://www.youtube.com/embed/0AVAQdln2LU", "https://www.youtube.com/embed/55T0R6BtT4k"]
yoga = ["https://www.youtube.com/embed/v7AYKMP6rOE", "https://www.youtube.com/embed/cnKZit6VB44", "https://www.youtube.com/embed/GLy2rYHwUqY", "https://www.youtube.com/embed/Yzm3fA2HhkQ", "https://www.youtube.com/embed/b1H3xO3x_Js", "https://www.youtube.com/embed/hJbRpHZr_d0", "https://www.youtube.com/embed/S9p5yhE6_fk", "https://www.youtube.com/embed/BPK9WNtpBgk", "https://www.youtube.com/embed/5v1wqxnrmrk", "https://www.youtube.com/embed/KEYSO-Tc2Go"]
strength = []
cardio = []

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
    document.getElementById('ytVideo').src = length15[Math.floor(Math.random() * length15.length)];
  };
  function screen30() {   
    document.getElementById('ytVideo').src = length30[Math.floor(Math.random() * length30.length)];
  };
  function screen45() {   
    document.getElementById('ytVideo').src = length45[Math.floor(Math.random() * length45.length)];
  };
  function yoga() {   
    document.getElementById('ytVideo').src = yoga[Math.floor(Math.random() * yoga.length)];
    console.log(yoga[Math.floor(Math.random() * yoga.length)])
  };
  