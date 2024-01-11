document.querySelector('#submit').addEventListener('click', function () {
        const form = document.getElementById('sign_up');
        const formData = new FormData(form);
        const formObject = {};

        formData.forEach(function (value, key) {
            formObject[key] = value;
        });

        // Store the form data in localStorage
        localStorage.setItem('userData', JSON.stringify(formObject));

        // You can also redirect to another page or perform any other actions here
        console.log('Form data stored in localStorage:', formObject);

        window.location.href = './signupSuccess.html';
});
