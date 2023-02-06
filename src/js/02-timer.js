import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.getElementById('datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

input.addEventListener('input', getInterval);
startBtn.addEventListener('click', onTimer);

let interval = 0;

function getInterval(event) {
  const curentTime = Date.now();
  const endTime = Date.parse(event.target.value);
  interval = endTime - curentTime;
  if (interval <= 0) {
    window.alert('Please choose a date in the future');
  }
}

function pud(value) {
  return String(value).padStart(2, '0');
}

function onTimer() {
  if (interval) {
    startBtn.disabled = 'true';
    const timerId = setInterval(() => {
      interval -= 1000;
      const timeObj = convertMs(interval);
      console.log(interval);
      if (interval <= 1000) {
        clearInterval(timerId);
      }
      return updaitTimer(timeObj);
    }, 1000);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(ms));

function updaitTimer(timeObj) {
  console.log(timeObj);
  const { days, hours, minutes, seconds } = timeObj;
  daysEl.textContent = pud(days);
  hoursEl.textContent = pud(hours);
  minutesEl.textContent = pud(minutes);
  secondsEl.textContent = pud(seconds);
}
