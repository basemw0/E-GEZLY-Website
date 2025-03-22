

var myTeam = createTeam();

function checkPass() {
  var pass = "0000";
  var entered = document.getElementById("password").value;

  if (entered === pass) {
    alert("Correct password!");
    document.getElementById("tickets").style.visibility = "visible";
    document.getElementById("users").style.visibility = "visible";
  } else {
    alert("Incorrect password! Try againn");
  }
}

function goToTickets() {
  window.location.href = "Webpage9.html";
}

function goToUsers() {
  window.location.href = "Webpage10.html";
}
