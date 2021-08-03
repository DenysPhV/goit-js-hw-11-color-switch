const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let switchColorsId = null;
// тут включить преремену фона с помощью этого
function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  onSwitchColorBackground();
  console.log('START');
}

// выключить когда надоест
refs.stopBtn.disabled = true;
function onStopBtnClick() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  clearInterval(switchColorsId);
  console.log('STOP');
}

// слушатели на кнопки СТАРТ и СТОП
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

// работаю надэтой функцией

function onSwitchColorBackground() {
  switchColorsId = setInterval(() => {
    console.log('Вызов покраски фона');
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}
