import { RoomSettings } from './types/types';

const offers: RoomSettings[] = [
  {
    id: 1,
    isPremium: true,
    title: 'Beautiful & luxurious studio at great location',
    price: 120,
    type: 'apartment',
    rating: 4.8,
    isFavourite: true,
    previewUrl: './img/apartment-01.jpg',
    city: {
      name: 'Paris',
    },
  },
  {
    id: 2,
    isPremium: false,
    title: 'Wood and stone place',
    price: 80,
    type: 'room',
    rating: 3.6,
    isFavourite: false,
    previewUrl: './img/apartment-02.jpg',
    city: {
      name: 'Dusseldorf',
    },
  },
  {
    id: 3,
    isPremium: false,
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'apartment',
    rating: 4,
    isFavourite: true,
    previewUrl: './img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
    },
  },
  {
    id: 4,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'apartment',
    rating: 5,
    isFavourite: true,
    previewUrl: './img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
    },
  },
  {
    id: 5,
    isPremium: false,
    title: 'Wood and stone place',
    price: 80,
    type: 'room',
    rating: 4.2,
    isFavourite: false,
    previewUrl: './img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
    },
  },
];

export default offers;
