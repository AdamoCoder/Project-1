let cookieCount = 0;

const button = document.getElementById('cookie-button');
const cookieCountDisplay = document.getElementById('cookie-count');

button.addEventListener('click', () => {
    cookieCount++;
    cookieCountDisplay.textContent = cookieCount;
}); 