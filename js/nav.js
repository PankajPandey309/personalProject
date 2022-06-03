/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
window.onload = function toggleMenu() {
    var x = document.getElementById("index_header_menu");
    if (x.className === "index_header_menu") {
      x.className += " responsive";
    } else {
      x.className = "index_header_menu";
    }
  }