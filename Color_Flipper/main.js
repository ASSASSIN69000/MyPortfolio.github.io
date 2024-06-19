const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'azure', 'bisque', 'beige', 'blanchedalmond', 'aliceblue'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
    btn.style.opacity = 0.5;
    color.textContent = colors[randomNumber];
})

// get a random number between 0-3, *ARRAY*
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
};