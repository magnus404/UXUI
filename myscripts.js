//The Clock
var hourEle = document.getElementById("hrMin")
var secEle = document.getElementById("sec")
var dateEle = document.getElementById("date")
var pause = false;

setInterval(function () {
    if (pause) {
        return;
    }
    var dt = new Date();
    hourEle.innerHTML = toTwoDigit(dt.getHours() % 12) + ":" + toTwoDigit(dt.getMinutes());
    secEle.innerHTML = "<span>" + toTwoDigit(dt.getSeconds()) + "</span>" + (dt.getHours() / 12 > 1 ? " P" : " A") + "M";
    var d  = dt.toString().slice(0,15);
    dateEle.innerHTML = d.slice(0,4) + "<span>" + d.slice(4,10) + "</span>" + d.slice(10,15);
}, 1000)

function toTwoDigit(num) {
    return (num < 10 ? "0" : "") + num;
}









//Modal Box


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}