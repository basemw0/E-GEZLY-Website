document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    const userTable = document.getElementById("user");

    // Iterate through each user's data and create a new row for each
    userData.forEach((user) => {
      const newRow = userTable.insertRow();
      user.forEach((data) => {
        const cell = newRow.insertCell();
        cell.innerHTML = data;
      });
    });
  }
});

function goToTickets() {
  window.location.href = "Webpage9.html";
}

function goToHome() {
  window.location.href = "Webpage1.html";
}
