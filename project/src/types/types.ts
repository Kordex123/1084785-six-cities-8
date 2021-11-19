interface City {
  name: string,
}

export const RoomTypeToName = {
  apartment: 'Apartment',
  room: 'Private room',
  house: 'House',
  hotel: 'Hotel',
};

export type RoomType = 'apartment' | 'room' | 'house' | 'hotel';

export interface RoomSettings {
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
