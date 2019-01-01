function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Submit është bërë " + localStorage.clickcount + " herë";

  } else {
    document.getElementById("result").innerHTML = "Nuk perkrahet nga browseri juaj";
  }
}
