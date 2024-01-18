const colors = ['#F2AFEF', '#C499F3', '#7360DF', '#33186B'];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
  btn.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
