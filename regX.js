function allLetter(inputtext) {

var name = document.getElementById('name');
var filter = /^[A-Za-z]+$/;
if (!filter.test(name.value)) {
       alert('Vendos vetem shkronja');

       return false;
     }
    }
