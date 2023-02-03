const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', startChangeColor);
stop.addEventListener('click', stopChangeColor);

let timerId = null;
function startChangeColor() {
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  start.disabled = true;
  if (stop.hasAttribute('disabled')) {
    stop.disabled = false;
  }
}

function stopChangeColor() {
  clearInterval(timerId);
  stop.disabled = true;
  start.disabled = false;
}
