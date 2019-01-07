function allLetter() {

var name = document.getElementById('name1');
var filter = /^[A-Za-z]+$/;
if (!filter.test(name.value)) {
       alert('Vendos vetem shkronja');

       return false;
     }

     if (filter.test(name.value)) {
       return true;}
    }
