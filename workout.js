document.addEventListener("DOMContentLoaded", function () {
  console.log("Script Loaded");
});

// Define workout video arrays for different categories
const length15 = [
  "https://www.youtube.com/embed/VWj8ZxCxrYk?si=W_Poqp1pY6Vdru08",
  "https://www.youtube.com/embed/IvmaekQfKiw?si=vvo35JxT7Ojtj5E7",
  "https://www.youtube.com/embed/yzEe5FAEoLQ?si=UBBYSMBs5m4lDs63",
  "https://www.youtube.com/embed/v8CDptlpeys?si=ypmioDJMGEXVF7r6",
  "https://www.youtube.com/embed/MxLL9Scvmzo?si=Qmn1nzh2mhESy0by",
  "https://www.youtube.com/embed/I7eoLFbSH6U?si=5Vy3TpFi3-H01GiH",
  "https://www.youtube.com/embed/EvMTrP8eRvM?si=UcYjRQwXcEn2bAJX",
  "https://www.youtube.com/embed/U-oPOj0W9Sc?si=cr7qS3AleBqLVwVE",
  "https://www.youtube.com/embed/6INXj5B5uqE?si=KlPtIEApwJfUUwb8",
  "https://www.youtube.com/embed/cgjdYaLdJTo?si=ES_Lm4R_SZ81_2nC",

  "https://www.youtube.com/embed/Gc6LiaPyvL8?si=iFb6mkDism8ZlMrZ",
  "https://www.youtube.com/embed/Qd8MjQE4rqs?si=yB_nVOOQI0wytJUg",
  "https://www.youtube.com/embed/FLQqCyhTQdE?si=hw39XWLLHYDjU26P",
  "https://www.youtube.com/embed/ghdM9FJXAeo?si=J3pjsYK5ce_oChcc",
  "https://www.youtube.com/embed/h5tFiJVTQBw?si=QR_T8WgSWIULcIqX",
];

const length30 = [
  "https://www.youtube.com/embed/h5tFiJVTQBw?si=QR_T8WgSWIULcIqX",
  "https://www.youtube.com/embed/9FBIaqr7TjQ?si=Bw5ULe0CPQ8uK-FV",
  "https://www.youtube.com/embed/wAd2pu2N6Cs?si=wlX9JC5Tj-WcooDA",
  "https://www.youtube.com/embed/zejHjXjhdiY?si=Qfi_OM1RuQCAbpyC",
  "https://www.youtube.com/embed/PUs5vQ2Osbo?si=pDe-UX8nw37g3Rs3",

  "https://www.youtube.com/embed/gKjgJ5k3i7c?si=yJAC-VbUln1oI9uL",
  "https://www.youtube.com/embed/9MazN_6wdqI?si=ybgO3pe-QZfhaNsk",
  "https://www.youtube.com/embed/8lkJi4ldZ90?si=TvNk4eqhleULgf7f",
  "https://www.youtube.com/embed/0h7taISrO7c?si=vYVgfeQ3XOXOcnhb",
  "https://www.youtube.com/embed/lQ7xA9dzwcA?si=4BYShVr6k9UrXiRL",

  "https://www.youtube.com/embed/kZDvg92tTMc?si=IM0AeXZ1xj1vfD-v",
  "https://www.youtube.com/embed/cZyHgKtK75A?si=fCPk-9S_p_Qje_dM",
  "https://www.youtube.com/embed/ImI63BUUPwU?si=vsrJJD7Di5GR82Aq",
  "https://www.youtube.com/embed/Yn0dV4s81H0?si=VwaKm2t8B43FJI4t",
  "https://www.youtube.com/embed/p9GPq3g5IDQ?si=M1W7luqfzJgzgQHX",
];

const length45 = [
  "https://www.youtube.com/embed/QD90RtXFXbg?si=Uj402JnKhFYi_EJ3",
  "https://www.youtube.com/embed/0AVAQdln2LU?si=N-EvojyjPx5Uk0vu",
  "https://www.youtube.com/embed/a--_yI932uo?si=HBImeARw3hzVYZBe",
  "https://www.youtube.com/embed/jA5tcRqBjOE?si=a19PVv2W95D0XInN",
  "https://www.youtube.com/embed/QD90RtXFXbg?si=V5D5K-KJM715_iuq",

  "https://www.youtube.com/embed/HzfHKN6rmpk?si=RQ_OxZ_8KYWhlArn",
  "https://www.youtube.com/embed/-BuBQNurp3Y?si=mOggHYILqQ-1WzeU",
  "https://www.youtube.com/embed/_JEO0KWcP3M?si=wnhExAFn3eCqaaE_",
  "https://www.youtube.com/embed/_Zem0_qsDg0?si=YQ3sy32HvZ2u9jpM",
  "https://www.youtube.com/embed/3iOl1ovRHF0?si=0BqXO6VFmNIQBIxy",

  "https://www.youtube.com/embed/PZB7EkWkj_M?si=dKlH7KUhyu3kR-FE",
  "https://www.youtube.com/embed/HmESLL_7AUU?si=CQFfvp8qhGhJZTpH",
  "https://www.youtube.com/embed/w98tzKQQMuE?si=jVbIl9nSshTR3TxI",
  "https://www.youtube.com/embed/WdOcag5C_DE?si=-A9TOhGC1u0DA4CF",
  "https://www.youtube.com/embed/E2oIyh87_3k?si=ZS1ykAXPuObzB_71",
];

const yoga = [
  "https://www.youtube.com/embed/I7eoLFbSH6U?si=5Vy3TpFi3-H01GiH",
  "https://www.youtube.com/embed/EvMTrP8eRvM?si=UcYjRQwXcEn2bAJX",
  "https://www.youtube.com/embed/U-oPOj0W9Sc?si=cr7qS3AleBqLVwVE",
  "https://www.youtube.com/embed/6INXj5B5uqE?si=KlPtIEApwJfUUwb8",
  "https://www.youtube.com/embed/cgjdYaLdJTo?si=ES_Lm4R_SZ81_2nC",
  "https://www.youtube.com/embed/gKjgJ5k3i7c?si=yJAC-VbUln1oI9uL",
  "https://www.youtube.com/embed/9MazN_6wdqI?si=ybgO3pe-QZfhaNsk",
  "https://www.youtube.com/embed/8lkJi4ldZ90?si=TvNk4eqhleULgf7f",
  "https://www.youtube.com/embed/0h7taISrO7c?si=vYVgfeQ3XOXOcnhb",
  "https://www.youtube.com/embed/lQ7xA9dzwcA?si=4BYShVr6k9UrXiRL",

  "https://www.youtube.com/embed/PZB7EkWkj_M?si=dKlH7KUhyu3kR-FE",
  "https://www.youtube.com/embed/HmESLL_7AUU?si=CQFfvp8qhGhJZTpH",
  "https://www.youtube.com/embed/w98tzKQQMuE?si=jVbIl9nSshTR3TxI",
  "https://www.youtube.com/embed/WdOcag5C_DE?si=-A9TOhGC1u0DA4CF",
  "https://www.youtube.com/embed/E2oIyh87_3k?si=ZS1ykAXPuObzB_71",
];

const strength = [
  "https://www.youtube.com/embed/Gc6LiaPyvL8?si=iFb6mkDism8ZlMrZ",
  "https://www.youtube.com/embed/Qd8MjQE4rqs?si=yB_nVOOQI0wytJUg",
  "https://www.youtube.com/embed/FLQqCyhTQdE?si=hw39XWLLHYDjU26P",
  "https://www.youtube.com/embed/ghdM9FJXAeo?si=J3pjsYK5ce_oChcc",
  "https://www.youtube.com/embed/h5tFiJVTQBw?si=QR_T8WgSWIULcIqX",
  "https://www.youtube.com/embed/9FBIaqr7TjQ?si=Bw5ULe0CPQ8uK-FV",
  "https://www.youtube.com/embed/wAd2pu2N6Cs?si=wlX9JC5Tj-WcooDA",
  "https://www.youtube.com/embed/zejHjXjhdiY?si=Qfi_OM1RuQCAbpyC",
  "https://www.youtube.com/embed/PUs5vQ2Osbo?si=pDe-UX8nw37g3Rs3",
  "https://www.youtube.com/embed/QD90RtXFXbg?si=Uj402JnKhFYi_EJ3",
  "https://www.youtube.com/embed/0AVAQdln2LU?si=N-EvojyjPx5Uk0vu",
  "https://www.youtube.com/embed/a--_yI932uo?si=HBImeARw3hzVYZBe",
  "https://www.youtube.com/embed/jA5tcRqBjOE?si=a19PVv2W95D0XInN",
  "https://www.youtube.com/embed/QD90RtXFXbg?si=V5D5K-KJM715_iuq",
  "https://www.youtube.com/embed/UkwonvfOLEc?si=xofUYfoWmA9SdY0w",
];

const cardio = [
  "https://www.youtube.com/embed/VWj8ZxCxrYk?si=W_Poqp1pY6Vdru08",
  "https://www.youtube.com/embed/IvmaekQfKiw?si=vvo35JxT7Ojtj5E7",
  "https://www.youtube.com/embed/yzEe5FAEoLQ?si=UBBYSMBs5m4lDs63",
  "https://www.youtube.com/embed/v8CDptlpeys?si=ypmioDJMGEXVF7r6",
  "https://www.youtube.com/embed/MxLL9Scvmzo?si=Qmn1nzh2mhESy0by",

  "https://www.youtube.com/embed/kZDvg92tTMc?si=IM0AeXZ1xj1vfD-v",
  "https://www.youtube.com/embed/cZyHgKtK75A?si=fCPk-9S_p_Qje_dM",
  "https://www.youtube.com/embed/ImI63BUUPwU?si=vsrJJD7Di5GR82Aq",
  "https://www.youtube.com/embed/Yn0dV4s81H0?si=VwaKm2t8B43FJI4t",
  "https://www.youtube.com/embed/p9GPq3g5IDQ?si=M1W7luqfzJgzgQHX",

  "https://www.youtube.com/embed/HzfHKN6rmpk?si=RQ_OxZ_8KYWhlArn",
  "https://www.youtube.com/embed/-BuBQNurp3Y?si=mOggHYILqQ-1WzeU",
  "https://www.youtube.com/embed/_JEO0KWcP3M?si=wnhExAFn3eCqaaE_",
  "https://www.youtube.com/embed/_Zem0_qsDg0?si=YQ3sy32HvZ2u9jpM",
  "https://www.youtube.com/embed/3iOl1ovRHF0?si=0BqXO6VFmNIQBIxy",
];

// Function to toggle the dropdown for workout length
function timeFunction() {
  toggleDropdown("timeDropdown");
}

// Function to toggle the dropdown for workout type
function typeFunction() {
  toggleDropdown("typeDropdown");
}

// Function to handle dropdown toggling
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isVisible = dropdown.classList.contains("show");
  closeAllDropdowns();
  if (!isVisible) {
    dropdown.classList.add("show");
  }
}

// Close all dropdowns
function closeAllDropdowns() {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("show");
  }
}

// Close the dropdown menu if the user clicks outside of it, except when clicking on a dropdown item
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        let items = openDropdown.getElementsByTagName("a");
        let clickedInside = false;
        for (let j = 0; j < items.length; j++) {
          if (items[j] === event.target) {
            clickedInside = true;
            break;
          }
        }
        if (clickedInside) {
          closeAllDropdowns(); // Close the dropdown if an option is clicked
        } else {
          openDropdown.classList.remove("show");
        }
      }
    }
  }
};

// Functions to update the video player with the selected workout video
function screen15() {
  document.getElementById("ytVideo").src =
    length15[Math.floor(Math.random() * length15.length)];
  closeAllDropdowns();
}

function screen30() {
  document.getElementById("ytVideo").src =
    length30[Math.floor(Math.random() * length30.length)];
  closeAllDropdowns();
}

function screen45() {
  document.getElementById("ytVideo").src =
    length45[Math.floor(Math.random() * length45.length)];
  closeAllDropdowns();
}

function playYoga() {
  document.getElementById("ytVideo").src =
    yoga[Math.floor(Math.random() * yoga.length)];
  closeAllDropdowns();
}

function playStrength() {
  document.getElementById("ytVideo").src =
    strength[Math.floor(Math.random() * strength.length)];
  closeAllDropdowns();
}

function playCardio() {
  document.getElementById("ytVideo").src =
    cardio[Math.floor(Math.random() * cardio.length)];
  closeAllDropdowns();
}
