    //  String Methods, Assignment no. 21-25


//   PROBLEM no.01  
//  Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
//  titled fullName. Greet the user using his full name. 

 // SOLUTION

// Taking input for first name
let firstName = prompt("Enter your first name:");

// Taking input for last name
let lastName = prompt("Enter your last name:");

// Merging first and last names into fullName
let fullName = firstName + " " + lastName;

if (firstName && lastName) {
    // Greeting the user
    document.getElementById('message').innerHTML =
        "Assalam u Alaikum! " + fullName + ", and Welcome 🎊!";
    document.getElementById('message').style.color = 'green';
} else {
    document.getElementById('message').innerHTML = 'Fill the box';
    document.getElementById('message').style.color = 'red';
}
//             -----xxxxxxxxxxxxxxxx-----

//   PROBLEM no.02

/*Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser
 */

//  SOLUTION

function ModelLength() {
    let mobileModel = document.getElementById("mobileModel").value;
    let length = mobileModel.length;
   
    document.getElementById("result").innerHTML = 
        `My favorite phone is: ${mobileModel}.<br>The length of the string is: ${length}`;
}

//      -----xxxxxxxxx----




