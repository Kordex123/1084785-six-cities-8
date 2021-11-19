import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './data';
import { RoomSettings } from './types/types';

const Setting: {[key: string]: RoomSettings[]} = {
  OFFERS_DATA: offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={Setting.OFFERS_DATA}
    />
  </React.StrictMode>,
  document.getElementById('root'));
