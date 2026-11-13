//Selecting Side Navbar
var sideNav = document.getElementById("sideNav");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function () {
  sideNav.style.right = "0";
  menuIcon.style.color = "white";
  menuIcon.style.backgroundColor = "rgb(20, 83, 45)";
  closeIcon.style.color = "red";
});

closeIcon.addEventListener("click", function () {
  sideNav.style.right = "-40%";
  menuIcon.style.color = "black";
  menuIcon.style.backgroundColor = "rgb(220, 252, 231)";
});
