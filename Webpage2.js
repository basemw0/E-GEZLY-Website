function handleSubmit() {
  const input1 = document.getElementById("username").value;
  const input2 = document.getElementById("email").value;
  const input3 = document.getElementById("phone").value;
  const input4 = document.getElementById("password").value;

  if (input1 === "" || input2 === "" || input3 === "" || input4 === "") {
    alert("All fields are required.");
    return false;
  }

  // Retrieve existing user data from local storage or initialize an empty array
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  // Push the current user's data as a separate array to the main array
  userData.push([input1, input2, input3, input4]);

  // Store the updated user data array in local storage
  localStorage.setItem("userData", JSON.stringify(userData));

  return true;
  
}

function fun() {
  document.getElementById("myForm").reset();
}

function validateTextbox() {
  var box = document.getElementById("user name");
  var box2 = document.getElementById("email");
  var box3 = document.getElementById("phone");
  var box4 = document.getElementById("password");

  if (box.value == "" || box2.value == "") {
    alert("The field marked in red cannot be blank");
    if (box.value == "") {
      box.focus();
      box.style.border = "solid 3px red";
    }
    if (box2.value == "") {
      box2.style.border = "solid 3px red";
    }
    return false;
  }

  if (box3.value == "" || box4.value == "") {
    alert("The field marked in red cannot be blank");
    if (box3.value == "") {
      box3.focus();
      box3.style.border = "solid 3px red";
    }
    if (box4.value == "") {
      box4.style.border = "solid 3px red";
    }
    return false;
  }
}
function nextpage() {
  window.location = "Webpage3.html";
}
validateTextbox();
