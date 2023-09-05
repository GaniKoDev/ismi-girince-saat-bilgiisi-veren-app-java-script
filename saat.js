let userName = prompt("Please enter user name")

document.getElementById("userName").innerHTML = userName + ` welcome `
let today ;

let welcome = "Today is " ;

document.getElementById("welcome").innerHTML= welcome



function displayDate() {
    document.getElementById("saatBilgisi").innerHTML = Date();
  }

  displayDate()