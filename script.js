const btn = document.querySelector('.btn');
const pEl = document.getElementById('advice');
const adviceNum = document.getElementById('adviceNum');
const loader = document.getElementById('loader');

btn.addEventListener('click', () => {
  getAdvice();
});
const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  data = await res.json();
  await displayAdvice(data.slip);

  pEl.innerHTML === ''
    ? loader.classList.remove('d-none')
    : loader.classList.add('d-none');
};

const displayAdvice = advice => {
  pEl.innerHTML = `“${advice.advice}”`;
  adviceNum.innerHTML = `#${advice.id}`;
};

getAdvice();
