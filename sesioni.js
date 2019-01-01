function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Submit është bërë" + sessionStorage.clickcount + " herë";
  } else {
    document.getElementById("result").innerHTML = "Nuk perkrahet nga browseri juaj";
  }
}
