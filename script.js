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
  const yousure = confirm("Are you certain of your selection?");
  if (!yousure) {
    alert("Please edit your selection to your preference")
  } else {
    if (!checklow && !checkupp && !checknum && !checkspe) {
      alert("Please select at least one character type!")
    } else {
      let concatpassword = "";
      const lowletters = "abcdefghijklmnopqrstuvwxyz";
      const upletters = lowletters.toUpperCase();
      const numbers = "0123456789"
      const specialchar = "~!@#$%^&*()_+-=<>?/|{}[]";
      if (checklow) {
        concatpassword = concatpassword + lowletters;
      };

      if (checkupp) {
        concatpassword = concatpassword + upletters;
      };

      if (checknum) {
        concatpassword = concatpassword + numbers;
      };

      if (checkspe) {
        concatpassword = concatpassword + specialchar;
      };
      let displaypassword = "";
      for (let i = 0; i < passlength; i++) {
        let somerandomnumber = Math.floor(Math.random() * concatpassword.length);
        displaypassword = displaypassword + concatpassword[somerandomnumber];
      }
      const passwordText = document.querySelector("#password");
      passwordText.value = displaypassword;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", displaybtn);
passwordBtn.addEventListener("click", writePassword);


function passwordlengthfunc(val) {
  document.querySelector("#passwordvalue").innerHTML = val;
};