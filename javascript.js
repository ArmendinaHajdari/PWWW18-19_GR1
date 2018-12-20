<<<<<<< HEAD
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display ="none" ;
  }
  x[slideIndex].style.display = "block";

}
=======
$(function () {
     $("#flip").click(function(){

 $("#panel").slideToggle("slow");//edhe e shfaq edhe e largon
   //$("#panel").slideDown("slow");//nuk largon
 $("#flip").text("Shiko me shume...");
});
   }) ;
>>>>>>> ec2e00e9c1b3a1750457a634e9fbfa6b6e689204
