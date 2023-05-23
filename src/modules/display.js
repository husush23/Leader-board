import get from './get';
import post from './post.js';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const tbody = document.querySelector('.tbody');
const submitBtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

const display = async () => {
  tbody.innerHTML = '';
  const names = await get();
  names.forEach(name => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = name.user;
    td2.textContent = name.score;

    tr.append(td1, td2);
    tbody.append(tr);
  });
};
const addPost = e => {
  e.preventDefault();
  post('qdXYMNzZiowFhKCKo3tu', nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
};

const addToUI = () => {
  refreshbtn.addEventListener('click', display);
  submitBtn.addEventListener('click', addPost);
};

export default addToUI;
