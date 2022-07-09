let menu = document.querySelector('.menu').style.display
let menuIcon = document.getElementById("menu-icon")


menuIcon.addEventListener('click', function() {

    if (document.querySelector('.menu').style.display == "none") {
    document.querySelector(".menu").style.display = "flex"
    } 

    else {
    document.querySelector('.menu').style.display = "none";
    }
})