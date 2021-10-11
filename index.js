/**
 * The main JavaScript file of the application.
 *
 * @author Connie Tran Hedberg <connietranhedberg@gmail.com>
 * @version 1.0.0
 */


/** 
 * @function dropDownMenu - drops down a menu when user clicks on the button.
 * 
 */ 
function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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