let cookieCount = 0;

const button = document.querySelector('#cookie-button');
const cookieCountDisplay = document.getElementById('cookie-count');

button.addEventListener('click', () => {
    cookieCount++;
    cookieCountDisplay.textContent = cookieCount;

    if (cookieCount === 10) {
        document.getElementById('winMessage').style.display = 'block';
    }
}); 

let cookieRest = 0;

const buttonElement = document.querySelector('#cookieReset');

buttonElement.addEventListener('click', () => {
    cookieCount = 0;
    cookieCountDisplay.textContent = 0;
    document.getElementById('winMessage').style.display = 'none';
});