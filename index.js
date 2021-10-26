/**
 * The main JavaScript file of the application.
 *
 * @author Connie Tran Hedberg <connietranhedberg@gmail.com>
 * @version 1.0.0
 */


/** 
 * Click event - drops down and folds a menu when user clicks on the button.
 * 
 */ 
const button = document.getElementById("btn")
const list = document.getElementById("list")
list.style.display = "none"
button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display = "block"
    } 
    else {
        list.style.display = "none"
    } 
})

/** 
 * Click event - Change color on heart when clicked.
 * 
 */
const hearts = document.querySelectorAll(".heart")
for (const heart of hearts) {
    heart.addEventListener('click', () => {
        heart.classList.toggle('red')
    })
}

/** 
 * Click event - Change color on star when clicked.
 * 
 */
const stars = document.querySelectorAll(".star")
for (const star of stars) {
    star.addEventListener("click", () => {
        star.classList.toggle('orange')
    })
}


