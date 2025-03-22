function no() {
  try {
    // Define the values to be stored as integers
    var countmatches1 = 100;
    var countmatches2 = 150;
    var countmatches3 = 150;

    // Store the values in local storage
    localStorage.setItem("countmatches1", countmatches1);
    localStorage.setItem("countmatches2", countmatches2);
    localStorage.setItem("countmatches3", countmatches3);

    // Check if the values are stored correctly
    if (
      parseInt(localStorage.getItem("countmatches1")) === countmatches1 &&
      parseInt(localStorage.getItem("countmatches2")) === countmatches2 &&
      parseInt(localStorage.getItem("countmatches3")) === countmatches3
    ) {
      console.log(
        "Values successfully stored in local storage:",
        countmatches1,
        countmatches2,
        countmatches3
      );
    } else {
      console.error("Values not stored correctly in local storage");
    }
  } catch (error) {
    // Handle any errors that occur during the storage process
    console.error("Error storing values in local storage:", error);
  }
}

// Call the function to store the values
no();

var match1 = localStorage.getItem("countb1");
var match2 = localStorage.getItem("countb2");
var match3 = localStorage.getItem("countb3");
// Convert the retrieved value to a number
var match1s = parseInt(match1);
var match2s = parseInt(match2);
var match3s = parseInt(match3);

var remainingcinematickets1 = localStorage.getItem("remainingtickets1");
var remainingcinematickets2 = localStorage.getItem("remainingtickets2");
var remainingcinematickets3 = localStorage.getItem("remainingtickets3");

var remainingcinematickets1 = parseINT(remainingcinematickets1);
var remainingcinematickets2 = parseINT(remainingcinematickets2);
var remainingcinematickets3 = parseINT(remainingcinematickets3);

function goToUsers() {
  window.location.href = "Webpage10.html";
}

function goToHome() {
  window.location.href = "Webpage1.html";
}