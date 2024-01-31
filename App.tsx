import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

// screen
import RootStack from './src/navigation/RootStack/RootStack';
import {Colors} from './src/utils/theme';
import ContextProvider from './src/utils/context/contextProvider';

export default function App() {
  // Variables
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(true);
      KeyboardManager.setKeyboardDistanceFromTextField(15);
      KeyboardManager.setLayoutIfNeededOnUpdate(true);
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarDoneBarButtonItemText('Done');

      KeyboardManager.setToolbarManageBehaviourBy('position'); // "subviews" | "tag" | "position"
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);

      // KeyboardManager.setToolbarTintColor(Colors.blue); // Only #000000 format is supported
      // KeyboardManager.setToolbarBarTintColor(Colors.textInput); // Only #000000 format is supported
      KeyboardManager.setShouldShowToolbarPlaceholder(false);
      KeyboardManager.setOverrideKeyboardAppearance(true);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.setKeyboardAppearance('light'); // "default" | "light" | "dark"
      KeyboardManager.resignFirstResponder();
      KeyboardManager.setShouldPlayInputClicks(true);
      KeyboardManager.reloadLayoutIfNeeded();
      KeyboardManager.isKeyboardShowing().then(() => {
        // ...
      });
    }
  }, []);

  // render Methods
  return (
    <ContextProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

      <RootStack />
    </ContextProvider>
  );
}
