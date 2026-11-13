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

//Product Search Functionality
var proContainer = document.getElementById("proContainer");
var searchInput = document.getElementById("searchInput");
var proList = proContainer.querySelectorAll("article");

// console.log(proList)

searchInput.addEventListener("keyup", function (event) {
  var enterValue = event.target.value.toUpperCase();

  for (var count = 0; count < proList.length; count = count + 1) {
    var proName = proList[count].querySelector("h2").textContent;

    if (proName.toUpperCase().indexOf(enterValue) < 0) {
      proList[count].style.display = "none";
    } else {
      proList[count].style.display = "grid";
    }
  }
});
