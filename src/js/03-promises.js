const form = document.querySelector('form.form');

form.addEventListener('submit', startcreatePromise);

function startcreatePromise(event) {
  event.preventDefault();
  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  for (let position = 1; position <= amount; position++) {
    delay += step;
    createPromise({ position, delay })
      .then(resolve => {
        console.log(`${resolve}`);
      })
      .catch(reject => {
        console.log(`${reject}`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
