document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Check local storage for saved theme, default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the theme immediately on load
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcons(currentTheme);

    // Toggle logic
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update HTML attribute for CSS
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Save to local storage so it remembers next time
        localStorage.setItem('theme', currentTheme);
        
        updateIcons(currentTheme);
    });

    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
});
