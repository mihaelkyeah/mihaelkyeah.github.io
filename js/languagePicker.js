'use strict';
async function changeLanguage(event) {
    event.preventDefault();
    let languageLabels = document.querySelectorAll('.languageDropdownHoverButton-pickedLanguage');
    Array.prototype.forEach.call(languageLabels, (label) => {
        if(!label.hidden)
            label.setAttribute('hidden', true);
    });
    document.getElementById(event.target.getAttribute('data-span-show')).removeAttribute('hidden');
    // try {
    //     languageDropdownHover.classList.remove('block');
    //     languageDropdownHover.classList.add('hidden');
    // } catch(e) {}
    let langJSON = await fetch('../json/lang/'+event.target.getAttribute('data-lang')+'.json')
    .then(response => response.json());
    for(let key in langJSON) {
        document.getElementById(key).innerHTML = langJSON[key];
    }
}
window.addEventListener('load', () => {
    let languagePickerButtons = document.querySelectorAll('.languageDropdownHover-option');
    Array.prototype.forEach.call(languagePickerButtons, (btn) => {
        btn.addEventListener('click', changeLanguage);
    })
});