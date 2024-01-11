document.querySelector('#submitted').addEventListener('click', function () {
        event.preventDefault();
        const form = document.getElementById('sign_up');
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value;
        });
        localStorage.setItem('userData', JSON.stringify(formObject));
        console.log('Form data stored in localStorage:', formObject);
        window.location.href = './signupSuccess.html';
});
