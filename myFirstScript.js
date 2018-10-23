//form validation function
document.getElementById("myform").addEventListener('submit',validateMyform);

function validateMyform(e) {
  //prevents submitting the empty form
      e.preventDefault(); 
  //get all the elements form the DOM
     var firstName = document.getElementById("fName").value,
        lastName = document.getElementById("lName").value,
        dateInput = document.getElementById("dateInput").value,
        Gender = document.querySelector('input[name="sex"]:checked').value,
        showResults = document.getElementById("details");
        output = ""; 

    //Check for each and every vale in the form 

                if(!firstName == "" ){

                  output += "your name is :<strong> "+ firstName + "</strong> <br>";

                 }else {

                  alert(" your FirstName is Missing");
                  document.getElementById("fName").focus();
                   return false;
               } 
                 
                if(!lastName == ""){
                  output += "your name is :<strong> "+ lastName + "</strong> <br>";
                
                }else {
                  alert(" your LastName is Missing"); 
                  lastName = document.getElementById("lName").focus();
                   return false;
                } 

                
                if(!dateInput == ""){

                    output +="your birthday is on :<strong> " + dateInput +" </strong><br>" ;
                      
                } else {
                   
                     alert("Your Date of Birth Field is missing"); 
                      dateInput = document.getElementById("dateInput").focus();
                      return false;
                }
                if(!Gender == "") {
                        output += "You are a :<strong>"+Gender+"</strong>";
                        
                } else {
                       
                        alert("your gender details are missing"); 
                        document.querySelectorAll('input[name="sex"]').focus();
                        return false; 
                }
              
              showResults.innerHTML = output; 
              document.getElementById("myform").reset();
              return true;
               
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



   
