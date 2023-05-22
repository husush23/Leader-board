import {nameInput, scoreInput, tbody} from './cons';

function creaetData() {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  td1.textContent = nameInput.value;
  td2.textContent = scoreInput.value;

  tr.append(td1, td2);
  tbody.append(tr);
}

export default creaetData;
