import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../container/Splash/SplashScreen';

// Mics Methods
import {navigationContainerRef} from './helpers';
import {
  type RootStackParamList,
  RootStackScreens,
} from './RootNavigation.types';
import {AppContext} from '../../utils/context/contextProvider';
import ScreenStack from './ScreenStack';

// Variables
const RootStack = createStackNavigator<RootStackParamList>();

// Main Function Component
const RootNavigationStack = () => {
  // Variables
  const {isLoading} = useContext(AppContext);
  // useEffects
  // render Methods
  return (
    // <ContextProvider>
    <NavigationContainer ref={navigationContainerRef}>
      <RootStack.Navigator
        initialRouteName={RootStackScreens.Splash}
        screenOptions={{
          headerShown: false,
        }}>
        <>
          {isLoading ? (
            <RootStack.Screen
              name={RootStackScreens.Splash}
              component={SplashScreen}
            />
          ) : (
            <RootStack.Screen
              name={RootStackScreens.NoteStack}
              component={ScreenStack}
              options={{
                animationTypeForReplace: 'push',
              }}
            />
          )}
        </>
      </RootStack.Navigator>
    </NavigationContainer>
    // </ContextProvider>
  );
};

export default RootNavigationStack;
