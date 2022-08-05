import React from 'react';
import analytics from '@react-native-firebase/analytics';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Stackscreen from './src/stackscreens/stackScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App: React.FC = () => {
  const routeNameRef: any = React.useRef();
  const navigationRef: any = React.useRef();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <Stackscreen />
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
