// Select elements
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.querySelector('.close-popup');

// Show the login pop-up when the "Login" button is clicked
loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

// Hide the pop-up when the close button is clicked
closePopup.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

// Hide the pop-up when clicking outside the content
loginPopup.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});
