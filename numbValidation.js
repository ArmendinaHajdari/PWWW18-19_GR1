function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("numb").value;
  try {
    if(x == "")  throw "Vendos nje numer brenda rangut";
    if(isNaN(x)) throw "Vendos nje numer brenda rangut";
    x = Number(x);
    if(x < 1)  throw "Vendos nje numer brenda rangut";
    if(x > 11)   throw "Vendos nje numer brenda rangut";
  }
  catch(err) {
    message.innerHTML = "" + err;
  }
}
