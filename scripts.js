// Select the Theme Toggle Button
const themeToggle = document.getElementById('theme-toggle');

// Add an Event Listener for Click Event
themeToggle.addEventListener('click', () => {
    // Toggle the 'light-theme' Class on the Body Element
    document.body.classList.toggle('light-theme');

    // Update the Icon or Text for Theme Toggle Button
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
});