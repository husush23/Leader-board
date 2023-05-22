import './styles/style.css';
import creaetData from './modules/add.js';

const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  creaetData();
});
