import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Client } from 'boardgame.io/react';
import * as game from './game';

const App = Client({
  game,
});

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
