// script.js

// Function to display current date and time on the website
function displayCurrentDateTime() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const dateTimeString = currentDate.toLocaleString('en-US', options);
    document.getElementById('dateTimeDisplay').textContent = dateTimeString;
}

// Call the function on page load
window.onload = displayCurrentDateTime;