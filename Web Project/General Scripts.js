document.addEventListener('DOMContentLoaded', () => {
    var themeStylesheet = document.getElementById('theme');
    var storedTheme = localStorage.getItem('theme');
    var themeToggle = document.getElementById('theme-toggle');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    themeToggle.addEventListener('change', () => {
        if(themeStylesheet.href.includes ('General')){
            themeStylesheet.href = 'Dark%20Theme.css';
        } 
        else {
            themeStylesheet.href = 'General%20Theme.css';
        }
        localStorage.setItem('theme',themeStylesheet.href)
    })
    localStorage.setItem('theme',themeStylesheet.href)
    if(themeStylesheet.href.includes ('Dark')){
        document.getElementById('theme-toggle').checked = true;
    }
    else {
        document.getElementById('theme-toggle').checked = false;
    }
    

})

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}