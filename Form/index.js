const gmailYandex = /\S+@\bgmail\b\.\S+|\S+@\byandex\b\.\S+/igm;
const regPass = /[@$!%*?&]/igm;

const formValidation = (form) => {
    try {
        if (form.emailInput.value === "") {
            form.emailInput.style.border = "1px solid red";
            form.emailInput.style.color = "red";
            document.getElementById('emailId').textContent = "Email is required";
            form.emailInput.focus();
            errors.push()
            throw new Error("Email is required");
        } else if(!form.emailInput.value.match(gmailYandex)) {
            form.emailInput.style.border = "1px solid red";
            form.emailInput.style.color = "red";
            document.getElementById('emailId').textContent = "You need to use gmail or yandex domain";
            throw new Error("You need to use gmail or yandex domain")
        }
        if(form.passwordInput.value === "" || form.passwordInput.value.length < 6) {
            form.passwordInput.style.border = "1px solid red";
            document.getElementById('passId').textContent = "Min size = 6 characters";
            form.passwordInput.focus();
            throw new Error("Min size = 6 characters")
        } else if(!checkForDifficult() === true) {
            throw new Error("Need more difficult password")
        }
        if(form.passwordConfirmInput.value === "" || form.passwordConfirmInput.value.length < 6) {
            form.passwordConfirmInput.style.border = "1px solid red";
            throw new Error("Confirming password is required")
        }
        if(form.passwordInput.value !== form.passwordConfirmInput.value) {
            form.passwordConfirmInput.style.border = "1px solid red";
            document.getElementById("passConfId").textContent = "Passwords do not match";
            form.passwordInput.focus();
            throw new Error("Passwords do not match")
        } 
    } catch(err) {
        alert(`${err.name}: ${err.message}`)
        return false
    }
    return true
    
}

const checkForDifficult = () => {
    const difficultPass = document.getElementById("nicePass");
        if(difficultPass.value.match(regPass)) {
        difficultPass.style.border = "1px solid green";
        document.getElementById('passId').style.display = "none";
        return true
    } else {
        return false
    }
}





