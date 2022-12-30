import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
import Notiflix from 'notiflix';

let selectedDate = new Date();

const options = {
  enableTime: false,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < options.defaultDate) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }
    if (selectedDate > options.defaultDate) {
      refs.startBtn.disabled = false;
      // console.log(options.enableTime);
    }
  },
};
console.log(options);

const fp = flatpickr('#datetime-picker', options);

const refs = {
  inputFP: document.querySelector('#datetime-picker'),

  startBtn: document.querySelector('button[data-start]'),
  timerEl: document.querySelector('.timer'),
};

console.log(refs.inputFP);

refs.timerEl.style.display = 'flex';
refs.timerEl.style.justifyContent = 'center';
refs.timerEl.style.gap = '10px';
refs.startBtn.disabled = true;

let timerId;

const timer = {
  start() {
    timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      if (deltaTime <= 0) {
        stopTimer();
        return;
      }

      const daysEl = refs.timerEl.querySelector('[data-days]');
      const hoursEl = refs.timerEl.querySelector('[data-hours]');
      const minutesEl = refs.timerEl.querySelector('[data-minutes]');
      const secondsEl = refs.timerEl.querySelector('[data-seconds]');

      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minutesEl.textContent = minutes;
      secondsEl.textContent = seconds;
    }, 1000);
  },
};

function startTimer() {
  timer.start();
  refs.startBtn.disabled = true;
  refs.inputFP.disabled = true;
  // options.enableTime = false;
  console.log(options.enableTime);
}

function stopTimer() {
  clearInterval(timerId);
}

refs.startBtn.addEventListener('click', startTimer);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
