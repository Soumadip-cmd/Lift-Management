//word limit text area
function limitWordCount(textarea, maxWords) {
    var words = textarea.value.trim().split(/\s+/);
    if (words.length > maxWords) {
        words = words.slice(0, maxWords);
        textarea.value = words.join(' ');
    }
}

function validate() {
    var mail = document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;

    var emailRes = document.getElementById('emailRes');

    if (!regx.test(mail)) {
        emailRes.style.color = "red";
        emailRes.innerText = "Please enter the correct format of the Email ID";
        return false;
    } else {
        emailRes.style.color = "blue";
        emailRes.innerText = "Correct format of Email ID!!!";
        return true;
    }
}

//mobile no validation
function val(elem) {
    var resDiv = document.getElementById('res');
    resDiv.style.color = "red"; // Set default color to red

    if (isNaN(elem.value)) {
        resDiv.innerText = "Please enter numbers only";
    } else {
        if (elem.value.length !== 10) {
            resDiv.innerText = "Please enter a ten-digit mobile number";
        } else {
            resDiv.innerText = "Correct format of Mobile Number!";
            resDiv.style.color = "blue"; // Change color to blue for correct format
        }
    }
}

function send_otp() {
    var win1;
    var win2;
    var otp = Math.floor(1000 + Math.random() * 9000);

    // Display the OTP in an alert
    alert("Your OTP is: " + otp);

    // Prompt the user to enter the OTP
    var enteredOTP = prompt("Please enter the OTP sent to your mobile:");

    // Convert the user input to a number
    var enteredOTPNumeric = parseInt(enteredOTP);


    if (enteredOTPNumeric === otp)
    {
        var p=alert("OTP verified!! You can now submit the form.");
        if(p==true)
        {
         emergency_id();
        }
        
        
    }

   else{

    alert("Incorrect otp!Try again!!!");
    win1=window.open("emergency.html");
    
   }
        
      }

//word limit text area
function limitWordCount(textarea, maxWords) {
    var words = textarea.value.trim().split(/\s+/);
    if (words.length > maxWords) {
        words = words.slice(0, maxWords);
        textarea.value = words.join(' ');
    }
}

function validate() {
    var mail = document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;

    var emailRes = document.getElementById('emailRes');

    if (!regx.test(mail)) {
        emailRes.style.color = "red";
        emailRes.innerText = "Please enter the correct format of the Email ID";
        return false;
    } else {
        emailRes.style.color = "blue";
        emailRes.innerText = "Correct format of Email ID!!!";
        return true;
    }
}

//mobile no validation
function val(elem) {
    var resDiv = document.getElementById('res');
    resDiv.style.color = "red"; // Set default color to red

    if (isNaN(elem.value)) {
        resDiv.innerText = "Please enter numbers only";
    } else {
        if (elem.value.length !== 10) {
            resDiv.innerText = "Please enter a ten-digit mobile number";
        } else {
            resDiv.innerText = "Correct format of Mobile Number!";
            resDiv.style.color = "blue"; // Change color to blue for correct format
        }
    }
}

function send_otp() {
    var win1;
    var win2;
    var otp = Math.floor(1000 + Math.random() * 9000);

    // Display the OTP in an alert
    alert("Your OTP is: " + otp);

    // Prompt the user to enter the OTP
    var enteredOTP = prompt("Please enter the OTP sent to your mobile:");

    // Convert the user input to a number
    var enteredOTPNumeric = parseInt(enteredOTP);


    if (enteredOTPNumeric === otp) {
        alert("OTP verified!! You can now submit the form.");
        emergency_id();
        win2=window.open("urgent-lift.html");
        
    } else {
        alert("Incorrect OTP! Try again!!!");
        win1 = window.open("emergency.html");
    }
    
        
      }

      function emergency_id() {
        var currentYear = new Date().getFullYear();
        var space=" ";
        var middle = "FIEM";

        var randomNum = Math.floor(Math.random() * 900) + 100;
        var generatedId = currentYear + space + middle + space + randomNum;
        
        var full_id = "Your emergency ID is: " + generatedId;
        alert(full_id);
        localStorage.setItem('id',generatedId);
    }
//    function id_authentication()
//      var win3;
//      {
//        prompt("Enter Your temporary id");
//        if(prompt==full_id)
//        {
//          alert("Succesful!!");
//        }
//      else{
//          win3=window.close("Elevator.html");
//      }
//      }




        
        
/// dont change  this function will update later
        // function openCenteredWindow() {
        //     var width = 600;
        //     var height = 400;
        //     var left = (window.innerWidth - width) / 2;
        //     var top = (window.innerHeight - height) / 2;
        //     var features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
        //     window.open('Elevator.html', 'Elevator Page', features);
        //  }






        
        
/// dont change  this function will update later
        // function openCenteredWindow() {
        //     var width = 600;
        //     var height = 400;
        //     var left = (window.innerWidth - width) / 2;
        //     var top = (window.innerHeight - height) / 2;
        //     var features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
        //     window.open('Elevator.html', 'Elevator Page', features);
        //  }