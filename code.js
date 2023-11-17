
let second = document.querySelector('.seconds');
let minute = document.querySelector('.minutes');
let hour = document.querySelector('.hours');
let deg = 6;

setInterval(clockHandler, 1000);

function clockHandler() {
    let d = new Date();
    let h = d.getHours() * 30;
    let m = d.getMinutes() * deg;
    let s = d.getSeconds() * deg;

    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
    minute.style.transform = `rotateZ(${m}deg)`;
    second.style.transform = `rotateZ(${s}deg)`;

 }


