//form validation function

function validateMyform() {
  //get all the elements form the DOM
     var firstName = document.getElementById("fName").value,
        lastName = document.getElementById("lName").value,
        dateInput = document.getElementById("dateInput").value,
        Gender = document.querySelector('input[name="sex"]:checked').value,
        details = document.getElementById("details"),
        output = "";

    //Check for each and every vale in the form 

                if(firstName == "" && lastName == ""){
                      alert("your first or last name is missing");
                 }else {
                      output += "your name is <strong> "+ firstName + " " + lastName +"</strong> <br>";
                      details.innerHTML =output;
                } 
                if(dateInput == ""){
                      alert("you forgot to enter your birthdate"); 
                    
                } else {
                     output +="your birthday is <strong> " + dateInput +" </strong><br>" ;
                     details.innerHTML =output;
                }
                if(Gender == "") {
                    alert("your gender details are missing");      
                } else {
                        output += "You are a <strong>"+Gender+"</strong>";
                        details.innerHTML =output;
                }
}
//Toggle button when you select the Gender 

function toggleFM(gender) {
  if( gender == "male") {
    document.querySelector(".sex ").style.borderColor = "red";
    document.getElementById("heading").textContent = "Hello Sir !";
  } else {
    document.querySelector(".sex ").style.borderColor = "blue";
    document.getElementById("heading").textContent = "Hello Madam !";
 }
}


   
