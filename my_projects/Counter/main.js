// initial count value
let count = 0;

// geting buttons from html
const value = document.getElementById('value'); // note that in getElementById we don't have to put # before text
const btns = document.querySelectorAll('.btn');  // note that in querySelectorAll we do have to put . before text


// this loop will run through all the classes that have the class .btn to it.
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const buttonId = e.currentTarget.classList;
        if (buttonId.contains('decrease')) {
            count--;
            value.style.color = '#ff11ee'
        }
        else if (buttonId.contains('reset')) {
            count = 0;
            value.style.color = '#000'
        }
        else if (buttonId.contains('increase')) {
            count++;
            value.style.color = '#22ffff'
        }
        value.textContent = count; // notice if this is outside of the event listener it will not work!
      });
  });