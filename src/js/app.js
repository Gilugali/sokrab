const registerLink = document.getElementById('register-link');
const loginTitle = document.querySelector('.login-title');
const additionalFields = document.getElementById('additional-fields');

let isRegistering = false; 

registerLink.addEventListener('click', function (e) {
    e.preventDefault();
//checking if the signup page 
    if (!isRegistering) {
       
        loginTitle.classList.add('move-up');
        additionalFields.classList.add('show');
        registerLink.textContent = 'Sign In Now'; 
    } else {
        // If registering, switch back to Sign In mode
        loginTitle.classList.remove('move-up');
        additionalFields.classList.remove('show');
        registerLink.textContent = 'Register Now'; 
    }

    // Toggle the state
    isRegistering = !isRegistering;
});