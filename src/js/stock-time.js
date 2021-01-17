function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}
  
function initializeClock(id, endtime) {
var timeDay = document.querySelector('#time-day');
var timeHour = document.querySelector('#time-hour');
var timeMin = document.querySelector('#time-min');
var timeSec = document.querySelector('#time-sec');

function updateClock() {
    var t = getTimeRemaining(endtime);

    timeDay.innerHTML = t.days;
    timeHour.innerHTML = ('0' + t.hours).slice(-2);
    timeMin.innerHTML = ('0' + t.minutes).slice(-2);
    timeSec.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
    clearInterval(timeinterval);
    }
}

updateClock();
var timeinterval = setInterval(updateClock, 1000);
}
  
var deadline="January 21 2021 00:00:00 GMT+0300";
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); 
initializeClock('countdown', deadline);