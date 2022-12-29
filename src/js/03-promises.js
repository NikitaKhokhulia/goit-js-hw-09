import Notiflix, { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
        // Fulfill
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
        //
      }
    }, delay);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const formEl = e.currentTarget.elements;

  let delay = Number(formEl.delay.value);
  const step = Number(formEl.step.value);
  const amount = Number(formEl.amount.value);

  for (let position = 0; position < amount; position++) {
    createPromise(position, delay)
      .then(value => value)
      .catch(error => error);
    delay += step;
  }
  refs.form.reset();
}

refs.form.addEventListener('submit', handleSubmit);
