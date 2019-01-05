function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("numb").value;
  try {
    if(x == "")  throw "vendos nje numer brenda rangut";
    if(isNaN(x)) throw "vendos nje numer brenda rangut";
    x = Number(x);
    if(x < 1)  throw "vendos nje numer brenda rangut";
    if(x > 10)   throw "vendos nje numer brenda rangut";
  }
  catch(err) {
    message.innerHTML = "" + err;
  }
}
