import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Client } from 'boardgame.io/react';
import * as game from './game';
import board from './Board';

const App = Client({
  game,
  board,
});

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
