import get from './get';
import post from './post';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const tbody = document.querySelector('.tbody');
const submitBtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

const display = async () => {
  const names = await get();
  //   console.log(names);
  names.forEach((name) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = name.user;
    td2.textContent = name.score;

    tr.append(td1, td2);
    tbody.append(tr);
  });
};
const addPost = () => {
  post('7A0hfuREvbxDO8PxYL5r', nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
};

const addToUI = () => {
  refreshbtn.addEventListener('click', display);
  submitBtn.addEventListener('click', addPost);
};

export default addToUI;
