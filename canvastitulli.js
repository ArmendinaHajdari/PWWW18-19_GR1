/*canvas text-in*/
window.onload = function() {
var canvas1 = document.getElementById("titull");
var ctx1=canvas1.getContext("2d");
ctx1.font="24px fantasy";
ctx1.fillStyle = "white";
ctx1.textAlign = "left";
ctx1.fillText("AAM", canvas1.width/2, canvas1.height/2);
};
