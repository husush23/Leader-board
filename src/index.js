import './styles/style.css';
import creaetData from './modules/add';

const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  creaetData();
});
