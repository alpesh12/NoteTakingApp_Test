import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../../utils/theme';
import NoteListScreen from '../../container/NoteList/NoteListScreen';
import AddNoteScreen from '../../container/AddNote/AddNoteScreen';
import DeleteNoteScreen from '../../container/DeleteNote/DeleteNoteScreen';

export default function ScreenStack() {
  const ScreenStackNavigator = createStackNavigator();

  return (
    <ScreenStackNavigator.Navigator initialRouteName={Screens.NoteListScreen}>
      <ScreenStackNavigator.Screen
        name={Screens.NoteListScreen}
        component={NoteListScreen}
        options={{headerShown: false}}
      />
      <ScreenStackNavigator.Screen
        name={Screens.AddNoteScreen}
        component={AddNoteScreen}
        options={{headerShown: false}}
      />
      <ScreenStackNavigator.Screen
        name={Screens.DeleteNoteScreen}
        component={DeleteNoteScreen}
        options={{headerShown: false}}
      />
    </ScreenStackNavigator.Navigator>
  );
}
