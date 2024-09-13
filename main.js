'use strict';

document.getElementById('switchToRegister').addEventListener('click', function (event) {
    event.preventDefault();
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');

    loginContainer.classList.add('hidden');

    setTimeout(() => {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
        registerContainer.classList.remove('hidden');
    }, 400);
});

document.getElementById('switchToLogin').addEventListener('click', function (event) {
    event.preventDefault();
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');

    registerContainer.classList.add('hidden');

    setTimeout(() => {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        loginContainer.classList.remove('hidden');
    }, 400);
});
