function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["comment"].value;
  if (x == "") {
    alert("Comments must be filled out");
    return false;
  }
}
