let c = 3 * 24 * 60 * 60;

      setInterval(() => {
        const calcDay = Math.floor(c / 86400);
        const calcHour = Math.floor(c % 86400 / 3600);
        const calcMin = Math.floor(c % 3600 / 60);
        const calcSec = Math.floor(c % 60);
        c = c - 1

        day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
        hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
        min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
        sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
      }, 1000);
    
date.innerHTML = new Date().toLocaleString();
let ua = window.navigator.userAgent;
device.innerHTML = ua
