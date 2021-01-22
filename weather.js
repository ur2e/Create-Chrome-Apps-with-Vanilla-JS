const API_KEY = "YOUR-API-KEY";
const COORDS = 'coords';

// 새로고침없이 데이터 가져오기


function saveCoords(coordsObj){
    // obj / array 저장 할 땐 Json형식으로 바꿔서
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude: longitude // 둘이 같으면 Lat처럼 하나만 써줘도 됨
    };
    saveCoords(coordsObj)
}

function handleGeoError() {
    console.log("Can\'t access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{

    }
}

function init(){
    loadCoords();
}

init();