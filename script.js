// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordBtn = document.querySelector("#generate2");

// Function to display prompts
function displaybtn() {
  const selectordisplay = document.querySelector(".selectors");
  selectordisplay.setAttribute("style", "display: block;");
}
// Write password to the #password input
function writePassword() {
  const passlength = document.querySelector("#passwordvalue").value;
  const checklow = document.querySelector("#Lowercase").checked;
  const checkupp = document.querySelector("#Uppercase").checked;
  const checknum = document.querySelector("#Numeric").checked;
  const checkspe = document.querySelector("#Special").checked;
  const yousure = confirm("Are you sure?");
  if (!yousure) {
    alert("Please edit your selection to your preference")
  } else {
    if (!checklow && !checkupp && !checknum && !checkspe) {
      alert("Please select at least one character type!")
    } else {
      alert("it worked");
      var concatpassword = [""];
      const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      for (let i = 0; i < passlength; i++) {
        const whichchar = Math.floor(Math.random() * 4);
        const randomlower = letters[Math.floor(Math.random()*letters.length)]
        if (whichchar === 0) {
          // alert(randomlower)
          concatpassword = concatpassword + randomlower;
          // alert(concatpassword);
        } else if (whichchar === 1) {
          // alert(randomlower.toUpperCase())
          concatpassword = concatpassword + randomlower.toUpperCase();
          // alert(concatpassword);
        } else if (whichchar === 2) {
          // alert( Math.floor(Math.random()*10));
          concatpassword = concatpassword + Math.floor(Math.random()*10)
          // alert(concatpassword);
        } else {
          // alert("some character")
          concatpassword = concatpassword + "$"
        }
       
      }
      alert(concatpassword +"!");
    }
  }

  // const password = generatePassword(); {

  // }

  // const passwordText = document.querySelector("#password");
  // passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", displaybtn);
passwordBtn.addEventListener("click", writePassword);


function passwordlengthfunc(val) {
  document.querySelector("#passwordvalue").innerHTML = val;
};

// var checklow = document.querySelector("#Lowercase").checked;

// math.round

// else (please select at least one character type!)

// var item = items[Math.floor(Math.random()*items.length)];
