const btns = document.querySelectorAll('.btn');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');
const value = document.getElementById('value');

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      counter--;
    } else if (style.contains('increase')) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = 'green';
    } else if (counter < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
    value.textContent = counter;
  })
})