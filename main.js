/*--------------------------------------------------------------
Main
--------------------------------------------------------------*/
// Legal Popup
if (sessionStorage.getItem('popup-legal') != 'shown') {
    const popup_legal = document.querySelector('.popup-legal');
    const popup_button = document.querySelector('.popup-legal .confirm-legal');
    popup_legal.style.display = 'block';

    popup_button.addEventListener('click', event => {
        event.preventDefault();
        sessionStorage.setItem('popup-legal', 'shown');
        popup_legal.style.display = 'none';
    });
}