import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './data';

type City = {
  name: string,
}

export const RoomTypeToName = {
  apartment: 'Apartment',
  room: 'Private room',
  house: 'House',
  hotel: 'Hotel',
};

export type RoomType = 'apartment' | 'room' | 'house' | 'hotel';

export type RoomSettings = {
  id: number,
  isPremium: boolean,
  title: string,
  price: number,
  type: RoomType,
  rating: number,
  previewUrl: string,
  isFavourite: boolean,
  city : City,
}

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
