var count1 = 0;
var count2 = 0;
var count3 = 0;
var countb1;
var countb2;
var countb3;
function bookTicket1() {
  var remainingCount1 = document.getElementById("remainingcount1");
  var currentCount1 = parseInt(remainingCount1.textContent);
  if (currentCount1 > 0) {
    count1++;
    currentCount1--;
    remainingCount1.textContent = currentCount1;
  } else {
    alert("Sorry, all tickets are sold out!");
    document.getElementById("available1").style.color = "red";
  }
}

function bookTicket2() {
  var remainingCount2 = document.getElementById("remainingcount2");
  var currentCount2 = parseInt(remainingCount2.textContent);
  if (currentCount2 > 0) {
    count2++;
    currentCount2--;
    remainingCount2.textContent = currentCount2;
  } else {
    alert("Sorry, all tickets are sold out!");
    document.getElementById("available2").style.color = "red";
  }
}

function bookTicket3() {
  var remainingCount3 = document.getElementById("remainingcount3");
  var currentCount3 = parseInt(remainingCount3.textContent);
  if (currentCount3 > 0) {
    count3++;
    currentCount3--;
    remainingCount3.textContent = currentCount3;
  } else {
    alert("Sorry, all tickets are sold out!");
    document.getElementById("available3").style.color = "red";
  }
}

function checkout() {
  try {
    // Define the value to be stored
    var countmatches = count1 + count2 + count3;
    localStorage.setItem("count1", count1);

    console.log("Value successfully stored in local storage:", count1);
    localStorage.setItem("count2", count2);

    console.log("Value successfully stored in local storage:", count2);
    localStorage.setItem("count3", count3);

    console.log("Value successfully stored in local storage:", count3);
    // Store the value in local storage
    localStorage.setItem("countmatches", countmatches);

    console.log("Value successfully stored in local storage:", countmatches);
  } catch (error) {
    // Handle any errors that occur during the storage process
    console.error("Error storing value in local storage:", error);
  }
  var countb1 = countmatches1 - count1;
  var countb2 = countmatches2 - count2;
  var countb3 = countmatches3 - count3;
  localStorage.setItem("countb1", countb1);
  localStorage.setItem("countb2", countb2);
  localStorage.setItem("countb3", countb3);
  alert(
    "tickets registered successfully ... Choose cinema page or receipt page"
  );
  localStorage.setItem("countmatches1", countb1);
  localStorage.setItem("countmatches2", countb2);
  localStorage.setItem("countmatches3", countb3);
}

// Call the function to store the value

var countmatches1s = localStorage.getItem("countmatches1");
var countmatches2s = localStorage.getItem("countmatches2");
var countmatches3s = localStorage.getItem("countmatches3");
// Convert the retrieved value to a number
var countmatches1 = parseInt(countmatches1s);
var countmatches2 = parseInt(countmatches2s);
var countmatches3 = parseInt(countmatches3s);

document.write(countmatches1);
document.write(countmatches2);
document.write(countmatches3);

function cinemapage() {
  window.location = "menu.html";
}

function receiptpage() {
  window.location = "Webpage6.html";
}