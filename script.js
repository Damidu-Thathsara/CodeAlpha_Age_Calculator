document
  .getElementById("userDetailsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("calculationTypePage").style.display = "block";
  });

document.getElementById("userAgeBtn").addEventListener("click", function () {
  // Get user details
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthdate = new Date(document.getElementById("birthdate").value);

  // Calculate age
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  // Display result
  alert(`${firstName} ${lastName} is ${age} years old.`);
});

document.getElementById("customAgeBtn").addEventListener("click", function () {
  const customBirthdate = prompt(
    "Enter the birthdate (YYYY-MM-DD) for custom age calculation:"
  );
  const birthdate = new Date(customBirthdate);

  // Calculate age
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  // Display result
  alert(`The custom user is ${age} years old.`);
});
