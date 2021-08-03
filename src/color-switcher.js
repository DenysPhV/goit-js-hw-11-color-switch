const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
// кнопка STOP не активна в начале
refs.stopBtn.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let switchColorsId = null;

// тут включить преремену фона с помощью этого
function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  // добавлю класс для тренировки
  refs.startBtn.classList.add('disabled');
  onSwitchColorBackground();
  console.log('START');
}

// выключить когда надоест

function onStopBtnClick() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  // а здесь удалю класс который добавил в кнопке старт
  refs.startBtn.classList.remove('disabled');

  clearInterval(switchColorsId);
  console.log('STOP');
}

// работаю надэтой функцией

function onSwitchColorBackground() {
  switchColorsId = setInterval(() => {
    // console.log('Вызов покраски фона');
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

// слушатели на кнопки СТАРТ и СТОП
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
