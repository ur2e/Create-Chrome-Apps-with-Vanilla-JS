// querySelector는 element의 자식을 탐색한다.
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date =  new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds 
    }`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();

//setInterval(func, 실행할 시간 간격) 밀리세컨드 기준이라 3000 = 3초