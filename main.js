/*--------------------------------------------------------------
Main
--------------------------------------------------------------*/

// Legal Popup
if (sessionStorage.getItem('popup-legal') != 'shown') {

    const popup_legal = document.querySelector('.popup-legal');
    popup_legal.style.display = 'block';

    const ageForm = document.querySelector('.age-form');
    ageForm.addEventListener('submit', event => {
        event.preventDefault();

        let ageFormData = Object.fromEntries(new FormData(ageForm).entries());

        const year = ageFormData.year;
        const month = `${ageFormData.month}`.padStart(2, '0');
        const day = `${ageFormData.day}`.padStart(2, '0');
        let date = [year, month, day].join('-');

        let is18 = isOver18(new Date(date));

        if (is18) {
            document.querySelector('.age-form-message').innerHTML = '';
            sessionStorage.setItem('popup-legal', 'shown');
            popup_legal.style.display = 'none';
        } else {
            document.querySelector('.age-form-message').innerHTML = 'Must be 18 years or older to continue.';
            document.querySelector('.age-form-message').classList.add('error');
        }

    });
}

// Check if over 18
function isOver18(dateOfBirth) {
    const date18YrsAgo = new Date();
    date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
    return dateOfBirth <= date18YrsAgo;
}