

function checkEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');

    if (email.length <= 3 || !email.includes('@') || !email.includes('.')) {
        emailError.innerHTML = 'Make sure email is more than 3 characters and has @ and a .';
        document.getElementById('allGoodToGo').innerHTML = '';
    } else {
        emailError.innerHTML = '';

    }
}



function checkPassword() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');

    if (password.length <= 8) {
        passwordError.innerHTML = 'Make sure password is more than 8 characters.';
        document.getElementById('allGoodToGo').innerHTML = '';
    } else {
        passwordError.innerHTML = '';
        checkAllGoodToGo();
    }
}



function checkAllGoodToGo() {
    var emailError = document.getElementById('emailError').textContent;
    var passwordError = document.getElementById('passwordError').textContent;
    var allGoodToGo = document.getElementById('allGoodToGo');

    if (emailError === '' && passwordError === '') {
        allGoodToGo.innerHTML = '<div class="success">All good to go!</div>';
    } else {
        allGoodToGo.innerHTML = '';
    }
}



function validateForm() {
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    if (emailError.textContent === '' && passwordError.textContent === '') {
        var confirmation = confirm('Confirm to sign up?');

        if (confirmation) {
            alert('Successful signup!');
        } else {
            debugger
            var email = document.getElementById('email')
            email.value = '';
            var pass = document.getElementById('password')
            pass.value = '';

            window.location.href = window.location.href;
        }
    } else {
        alert('Please correct the errors before submitting.');
    }
}
