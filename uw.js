function btn1() {

window.SignupUserName = prompt("Enter Your Username :")

 while (SignupUserName.length < 4 || SignupUserName.length > 10) {
   alert("The Username Needs To be between 4 and 10 Characters")
   window.SignupUserName = prompt("Enter Your Username :")
 }

window.SignupPassword = prompt("Enter Your Password :")

while (SignupPassword.length < 8 || SignupPassword.length > 12) {
   alert("The Password Needs To be between 8 and 12 Characters")
   window.SignupPassword = prompt("Enter Your Password :")
 }

   alert("We Signed You Up \n Hello " + SignupUserName)
}

function btn2() {

do {
  var LoginUserName = prompt("Enter Your Username :")
  if (LoginUserName != SignupUserName) {
    alert("This Username Doesnt Exist!")
  }
  } while (LoginUserName != SignupUserName);

do {
  var LoginPassword = prompt("Enter Your Password :")
  if (LoginPassword != SignupPassword) {
    alert("The Password Is Wrong!")
  }
  } while (LoginPassword != SignupPassword);

alert("You Logged In Successfully! \n Hello " + LoginUserName)
}