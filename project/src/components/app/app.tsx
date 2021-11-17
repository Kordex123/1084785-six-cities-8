import Main from  '../main/main';
import { RoomSettings } from '../../index';
// import Favourites from '../favourites/favourites';
// import SignIn from '../sign-in/sign-in';

type AppSettingProps = {
  offers: RoomSettings[],
}

function App({offers}: AppSettingProps): JSX.Element {
  return (
    <div>
      <Main offers={offers}/>
      {/*<SignIn />*/}
      {/*<Favourites offers={offers} />*/}
    </div>
  );
}

export default App;
