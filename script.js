// Function to toggle between light and dark modes
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // You can also save the user's preference in localStorage for persistence
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for user's preference in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});




