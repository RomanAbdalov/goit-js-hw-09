const refs = {
    btnStart:  document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')    
};
console.log(refs.btnStart);
console.log(refs.btnStop);

refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
    timerId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
     
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
};

function stopChangeColor(){
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
      
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};



