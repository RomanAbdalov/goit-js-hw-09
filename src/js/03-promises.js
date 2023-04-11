import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]')
};

function createPromise(position, delay) {
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
});
return promise;
};

refs.button.addEventListener('click', event => {
  event.preventDefault();

  const firstDelay = Number(refs.delay.value);
  const delayStep = Number(refs.step.value);

  for (let i = 0; i < refs.amount.value; i++) {
    createPromise(1 + i, firstDelay + i * delayStep)
    .then(({position, delay}) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
       })
       .catch(({position, delay}) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
          );
       });
     };
    });
