import React from 'react';
// import RootNavigator from './components/navigation/SwitchNavigator';
import Login from '../Login'
import RootProvider from './providers';
import {enableScreens} from 'react-native-screens';

enableScreens();

// function App(): React.ReactElement {
//   return <RootNavigator />;
// }

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      {/* <App /> */}
      <Login/>
    </RootProvider>
  );
}

export default ProviderWrapper;
