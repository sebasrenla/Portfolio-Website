// language.js - Handles language switching functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language from localStorage or default to English
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
    
    // Set active class on the current language button
    document.getElementById(`${currentLang}-lang`).classList.add('active');
    
    // Add event listeners to language buttons
    document.getElementById('en-lang').addEventListener('click', function() {
        setLanguage('en');
        this.classList.add('active');
        document.getElementById('es-lang').classList.remove('active');
    });
    
    document.getElementById('es-lang').addEventListener('click', function() {
        setLanguage('es');
        this.classList.add('active');
        document.getElementById('en-lang').classList.remove('active');
    });
    
    function setLanguage(lang) {
        // Save language preference
        localStorage.setItem('language', lang);
        
        // Update all elements with data-lang-key attribute
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Set the html lang attribute
        document.documentElement.lang = lang;
    }
}); 