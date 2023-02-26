
//greeting start
let nowtime = document.querySelector('.greeting');
function greeting() {
const date = new Date().getHours(); //метод достает час текущий из созданной даты/времени
let greetings = ['Good afternoon', 'Good evening', 'Good night', 'Good morning']
if(date >= 12 && date < 18){
    nowtime.textContent = (greetings[0]);
} else if(date > 17 && date <= 23){
    nowtime.textContent = (greetings[1]);
} else if(date >= 00 && date < 06){
    nowtime.textContent = (greetings[2]);
} else {nowtime.textContent = (greetings[3]);}
}

//greeting finish

//date block start
let date = document.querySelector('.date');
function showDate() {
    const newdate = new Date(); //этот метод создает текущую дату и время
const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
const currentDate = newdate.toLocaleDateString('en-En', options);
date.textContent = currentDate;
}
//date block finish

// time block start
let time = document.querySelector('.time');
function showTime() {
    const newtime = new Date();
const currentTime = newtime.toLocaleTimeString();
time.textContent = currentTime;
showDate();
greeting();
setTimeout(showTime, 1000);
}
showTime();
//time block finish

//saving name to local start
function setLocalStorage() {
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);   //сохраняем в локал введенное имя и называем его name
  }
  window.addEventListener('beforeunload', setLocalStorage); // вызываем до перезагрузки или закрытия страницы

  function getLocalStorage() {
    const name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name'); //получаем из локал сохраненное значение name
    }
  }
  window.addEventListener('load', getLocalStorage) //вызываем при загрузке страницы (работает и без этого метода)
//saving name to local finish

//background start
function getTime(){
    const date = new Date().getHours();
    if(date >= 12 && date < 18){
        return 'afternoon';
    } else if(date > 17 && date <= 23){
        return 'evening';
    } else if(date >= 00 && date < 06){
        return 'night';
    } else {return 'morning'}
}


const randomImage = function () {
    let image1 = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) + Math.ceil(1);
    return ('0' + image1).slice(-2);
    }


function background() {
    
 document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/yury0605/stage1-tasks/assets/images/${getTime()}/${randomImage()}.jpg)`; 

}
background();

let randomNum;
randomNum = randomImage();

function nextSlide() {
randomNum < 20 ? randomNum++ : randomNum = 1;
background();
}
const btnRight = document.querySelector('.slide-next');
btnRight.addEventListener('click', nextSlide);

function prevSlide() {
    randomNum === 1 ? randomNum = 20 : randomNum--;
    background();
    }
    const btnLeft = document.querySelector('.slide-prev');
    btnLeft.addEventListener('click', nextSlide);