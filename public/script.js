console.log("Script works");


window.addEventListener('load', function(){
  console.log("window works too");
  let emailInput = document.getElementById("emailInput");
  let textArea = document.getElementById("textArea");

  emailInput.addEventListener('blur', function() {
    if (emailInput.value == "") {
      alert("You didn't give me an email address. I AM LONELY AND DESIRE COMMUNICATION")
      emailInput.style.border = "3px solid crimson";}
    })
  });
