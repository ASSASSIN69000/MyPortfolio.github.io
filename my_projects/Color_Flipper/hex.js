const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // let random = randomNumber(); this code does not work
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];    // however this works fine
    };
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
  });

  function randomNumber() {
    return Math.floor(Math.random() * hex.length);
  };
