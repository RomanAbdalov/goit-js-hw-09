const refs = {
    btnStart:  document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')    
};
console.log(refs.btnStart);
console.log(refs.btnStop);

refs.btnStart.addEventListener('click', () => {
    const srartRandomColor = setInterval(getRandomHexColor(), 1000);
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
    console.log(getRandomHexColor())
});
refs.btnStop.addEventListener('click', stopChangeColor);

// let chengeColorId = setInterval(getRandomHexColor(), 1000);
// console.log(chengeColorId);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


function startChangeColor(){
  
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

};

function stopChangeColor(){
    clearInterval(chengeColorId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
      
};




