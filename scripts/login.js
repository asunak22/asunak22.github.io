$(document).ready(function(){
  var promptbutton = document.getElementsByClassName('js-prompt')[0];
  promptbutton.onclick = function(){
    var response = window.prompt("Enter your secret keyword:", "Secret");
    if(response === "test"){
      window.location.href = "./secret.html";
    } else {
      alert("Wrong keyword!");
    }
  }
})
