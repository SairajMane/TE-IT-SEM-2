let colors = {
    primaryColor : "#0085FF",
    borderColor : "#CECECE",
    dangerColor : "crimson",
    textColor : "#050505",
}

let auth = {
    username : "sairajmane.pict@gmail.com",
    password : "123",
}

// Avoid click to submit 
function setPrimitives() {
    document.querySelector("#log_in").addEventListener('submit', (event) => {
        event.preventDefault();
        validate();
    })
}


function validate() {
    let form = document.forms["log_in"];
    console.log(form);
    let usernameInput = form.elements['username'];
    let passwordInput = form.elements['password'];
    if(usernameInput.value == auth.username && passwordInput.value == auth.password) {
        window.location.href = "./success.html";
    }
    else {
        showHightlight();
    }
}

// Show errors
function showHightlight() {
    let textHightlight = document.querySelector("#hightlight-error");
    textHightlight.innerHTML = "Check Credentials";
    textHightlight.style.color = colors.dangerColor;
    textHightlight.style.fontWeight = '900';
}

// Hide error text
function hideHiglight() {   
    let textHightlight = document.querySelector("#hightlight-error");
    textHightlight.innerHTML = "Log in to explore";
    textHightlight.style.color = colors.textColor;
    textHightlight.style.fontWeight = '';
};

// Submit the form 
function submit(form) {
    console.log(form);
    // form.submit();
}   

document.querySelector('#submit').addEventListener('click', function () {
    const form = document.getElementById('log_in');
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach(function (value, key) {
        formObject[key] = value;
    });

    // Store the form data in localStorage
    localStorage.setItem('userData', JSON.stringify(formObject));

    // You can also redirect to another page or perform any other actions here
    console.log('Form data stored in localStorage:', formObject);

    window.location.href = './success.html';
});
