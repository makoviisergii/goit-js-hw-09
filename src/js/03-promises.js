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
// function createPromise({ position, delay }) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setInterval(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
//   promise
//     .then(resolve => {
//       console.log(`${resolve}`);
//     })
//     .catch(reject => {
//       console.log(`${reject}`);
//     });
// }

// console.log(delay.value);
// console.log(amount.value);
// console.log(step.value);
// console.log(this);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
