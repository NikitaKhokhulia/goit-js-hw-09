const refs = {
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handelBodyColor() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
}

function intervalColor() {
  timerId = setInterval(handelBodyColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function clearIntervalColor() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

refs.startBtn.addEventListener('click', intervalColor);

refs.stopBtn.addEventListener(`click`, clearIntervalColor);
