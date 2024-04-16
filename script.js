const logo = document.querySelector(".logo");
const body = document.querySelector(".body");
darkmode = true;

logo.addEventListener("click", function () {
  if (darkmode === true) {
    body.style.background = "white";
    body.style.color = "black";
    darkmode = false;
  } else if (darkmode === false) {
    body.style.background = "rgb(27, 27, 27)";
    body.style.color = "white";
    darkmode = true;
  }
});

function darkmode() {}
