const userName = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("interest");
const button = document.getElementById("btn");
const form = document.getElementById("form");

// Add event listener to submit button to prevent submission before validation

button.addEventListener("click", function(x){
    x.preventDefault();     
    validator();
})

// validator function to validate form and then submit it

function validator(){
    let url = "summary.html?";
    try{
        if(!userName.value){
            throw "Username is Missing";
        }
        else{
            url += `username=${userName.value}&`;
        }

        if(!email.value){
            throw "Email is Missing";
        }
        else if(!validateEmail(email.value)){
            throw "Email is not valid";
        }
        else{
            url += `email=${email.value}&`;
        } 

        if(select.value == "--select--"){
            throw "Interest is Missing";
        }
        else{
            url += `interest=${select.value}`;
        }
        window.open(url);
        document.form.submit();
    }
    catch(err){
        alert(err);
    }

}

// Validate Email syntax

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };