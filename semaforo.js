const btnred = document.getElementById("red")
const btnyello = document.getElementById("yello")
const btngreen = document.getElementById("green")
const btnteste = document.getElementById("test")
const traffcLight = document.getElementById("img")

let intervalId;
let imageIndex = 0;

const images = [
    'img/vermelho.png',
    'img/amarelo.png',
    'img/verde.png'
  ];

function red() {
    traffcLight.src = 'img/vermelho.png'
}

function yello() {
     traffcLight.src = 'img/amarelo.png'
}

function green() {
     traffcLight.src = 'img/verde.png'
    
}

function start() {
        intervalId = setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            traffcLight.src = images[imageIndex];
        }, 1000);
    
}

function stop() {
        clearInterval(intervalId);
        intervalId = null
    }
    

function toggle() {
    if (intervalId) {
      stop();
    } else {
      start();
    }
  }