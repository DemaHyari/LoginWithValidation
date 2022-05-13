function ErrorMassage(elementId, errorMessage) {
    document.getElementById(elementId).innerHTML = errorMessage;
}

function FormValidate() { 
    let username = document.signUp.username.value,
        phoneNumber = document.signUp.num.value,
        email = document.signUp.email.value,
        password = document.signUp.pw.value,
        checkBox = document.signUp.checkBox.checked,
        UsernameError = PhoneNumError = EmailError =  PasswordError = CheckBoxError = true;
    
    if(username == null || username == "") {
        ErrorMassage("UsernameError", "User Name can't be empty");
    }else{
        let UsernameReg = /^([a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF]).{0,20}$/;
        if (UsernameReg.test(username) === false) {
            ErrorMassage("UsernameError", "Please enter a valid user name");
        } else {
            ErrorMassage("UsernameError", "");
            nameErr = false;
        }
    }

    if(phoneNumber == null || phoneNumber == "") {
        ErrorMassage("PhoneNumError", "Phone Number can't be empty");
    } else {
        var PhoneNumReg = /^[0-9]\d{9}$/;
        if(PhoneNumReg.test(phoneNumber) === false) {
            ErrorMassage("PhoneNumError", "Please enter a valid 10 digit mobile number");
        } else{
            ErrorMassage("PhoneNumError", "");
            PhoneNumError = false;
        }
    }

    if(email == null ||  email == "") {
        ErrorMassage("EmailError", "Email address can't be empty");
    } else {
        var EmailReg = /^\S+@\S+\.\S+$/;
        if(EmailReg.test(email) === false) {
            ErrorMassage("EmailError", "Please enter a valid email address");
        } else{
            ErrorMassage("EmailError", "");
            EmailError = false;
        }
    }

    if(password == null ||  password == "") {
        ErrorMassage("PasswordError" , "Password  can't be empty");
    } else if (password.length < 8) {
        ErrorMassage("PasswordError" , "Your Password  is too short");
    } else {
            ErrorMassage("PasswordError", "");
            PasswordError = false;
    }

    if(checkBox == false) {
        ErrorMassage("CheckBoxError", "Please click Check box");
    } else {
       ErrorMassage("CheckBoxError", "");
        CheckBoxError = false;
    }

    if(( UsernameError || PhoneNumError || EmailError || PasswordError || CheckBoxError) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        let dataPreview = "You've entered the following details: \n" +
            "User Name: " + username + "\n" +
            "Phone Number: " + phoneNumber + "\n" +
            "Email Address: " + email + "\n" +
            "Password: " + password  + "\n" +
        alert(dataPreview);
    }
}  