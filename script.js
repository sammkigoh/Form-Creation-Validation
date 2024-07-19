document. addEventListener('DOMContentLoaded', function(){

    //form selection

    const form = document.getElementById ('registration-form');
    const feedbackDiv = document.getElementById ('form-feedback');

    //form submission and event prevention 

    form.addEventListener('submit', function (){
        event.preventDefault();

        //input retrieval and trimming
        
        const username = document.getElementById ('username').value.trim();
        const email = document.getElementById ('email').value.trim();
        const password = document.getElementById ('password').value.trim();

        // validation logic
        // initialize validation variables 
        let isValid = true;
        let messages= [];

        //username validation 
        if (username.length < 3) {
            isValid= false;
            messages.push ('Username should be at least 3 characters long.');
        }

        //email validation- check for '@' and '.'
        if (!email.includes ('@') || !email.includes ('.')) {
            isValid = false;
            messages.push ('email should have a valid email address.');
        }

        //password validation- the password should be at least 8 characters long

        if (password.length < 8) {
            isValid= false;
            messages.push ('Password must be at least 6 characters long.');
        }
        //feedback display logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedback.innerHTML = messages.join ("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});