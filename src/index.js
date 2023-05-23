import './styles/style.css';
import createGame from './modules/game.js';

import addToUI from './modules/display.js';

function allTogether() {
  createGame();
  addToUI();
}

allTogether();
