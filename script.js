function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById("firstName").value;
  	const lastName = document.getElementById("lastName").value;

  if (firstName && lastName) {
    alert( firstName +" " + lastName);
  } else {
    alert("Please fill out both First Name and Last Name fields.");
  }
}
