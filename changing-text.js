const changingText = document.getElementById('changing-text');
const services = ['Service', 'Consulting', 'Solutions', 'Expertise'];
let currentIndex = 0;

function changeText() {
    changingText.textContent = services[currentIndex];
    currentIndex = (currentIndex + 1) % services.length;
}

setInterval(changeText, 1500); // Change every 2 seconds (2000 milliseconds)
changeText();

