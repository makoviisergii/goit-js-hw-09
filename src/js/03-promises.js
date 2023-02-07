const form = document.querySelector('form.form');

form.addEventListener('submit', startcreatePromise);

function startcreatePromise(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const step = event.target.elements.step.value;
  const amount = event.target.elements.amount.value;
  for (let position = 1; position < amount; position++) {
    if (position === 1) {
      createPromise(position, delay);
    }
    createPromise(position, step);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((fulfill, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        fulfill(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise.then(console.log(`${fulfill}`)).catch(console.log(`${reject}`));
}

// console.log(delay.value);
// console.log(amount.value);
// console.log(step.value);
// console.log(this);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
