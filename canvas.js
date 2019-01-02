
window.onload = function() {
    var canvas = document.getElementById("myCanvas");//LOCAL VARIABLE
    var ctx = canvas.getContext("2d");

    var img = document.getElementById("scream");
  // ctx.drawImage(img, 10, 10);
ctx.drawImage(img,canvas.width/23, canvas.height/23);
};
