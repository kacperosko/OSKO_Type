
document.getElementById("foot").addEventListener("mouseenter", function() {
    document.getElementById("footer-left").style.opacity = "0"; 
    document.getElementById("footer-right").style.opacity = "0";
    document.getElementById("author").classList.add("center-horizontally")
})

document.getElementById("foot").addEventListener("mouseleave", function() {
    document.getElementById("footer-left").style.opacity = "1"; 
    document.getElementById("footer-right").style.opacity = "1";
    document.getElementById("author").classList.remove("center-horizontally")

})