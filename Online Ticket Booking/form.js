function validateName(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if(name.length >= 8){
        nameInput.style.borderColor = "white";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "white";
        return true;
    }
    else{
        nameInput.style.borderColor = "orange";
        nameMessage.textContent = "Name should be at least 8 characters long";
        nameMessage.style.color = "orange";
        return false;
    }
}

function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailPattern.test(email)){
        emailInput.style.borderColor = "white";
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "white";
        return true;
    }
    else{
        emailInput.style.borderColor = "orange";
        emailMessage.textContent = "Enter a valid email adress";
        emailMessage.style.color = "orange";
        return false;
    }
}

function validatePassword(){
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordMessage");
    
    if(password.length>=6){
        passwordInput.style.borderColor = "white";
        passwordMessage.textContent = "Strong password";
        passwordMessage.style.color = "white";
        return true;
    }
    else{
        passwordInput.style.borderColor = "orange";
        passwordMessage.textContent = "password should be at leat 6 character long";
        passwordMessage.style.color = "orange";
        return false;ed
    }
}

document.getElementById("myform").addEventListener("submit",function(event){
    const isvalidName = validateName();
    const isvalidEmail = validateEmail();
    const isvalidPassword = validatePassword();
    if(!isvalidName || !isvalidEmail || !isvalidPassword){
        event.preventDefault();
    }

});