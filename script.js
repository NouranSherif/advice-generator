const btn = document.querySelector('.btn');
const pEl = document.getElementById('advice');
const adviceNum = document.getElementById('adviceNum');

btn.addEventListener('click', () => {
  getAdvice();
});
const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  data = await res.json();
  await displayAdvice(data.slip);
};

const displayAdvice = advice => {
  pEl.innerHTML = `“${advice.advice}”`;
  adviceNum.innerHTML = `#${advice.id}`;
};

getAdvice();
