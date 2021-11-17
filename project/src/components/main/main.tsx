import RoomPreview from '../room-preview/room-preview';
import { RoomSettings } from '../../index';
import { useState } from 'react';

type MainSettingProps = {
  offers: RoomSettings[],
}

const getCityandRoomCount = (offers: RoomSettings[]) =>
  offers.reduce((result: {[key: string]: number}, offer: RoomSettings) => {
    if (result[offer.city.name] === undefined) {
      result[offer.city.name] = 0;
    }
    result[offer.city.name]++;
    return result;
  }, {});

function Main({offers} : MainSettingProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>(offers[0].city.name);
  const cityToCount = getCityandRoomCount(offers);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              Object.keys(cityToCount).map( (city) => (
                <li className="locations__item" key={city}>
                  <a className="locations__item-link tabs__item" href="#" onClick={() => setCurrentCity(city)}>
                    <span>{city}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityToCount[currentCity]} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              { offers.map((offer) => <RoomPreview offer={offer} key={offer.id}/> )}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
