import React, {useEffect, useState} from 'react';

// Mics Constants
import {
  BlankImage,
  BlankView,
  BoldText,
  BoldTextView,
  ContainerView,
  DescText,
  GoImage,
  GoImageView,
  ItemText,
  NoteItemView,
} from './NoteListScreenStyle';
import {Images, Screens} from '../../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKeys} from '../../utils/theme/constants';
import {useNavigation} from '@react-navigation/native';

// Components

export default function NoteListScreen() {
  const navigation = useNavigation();

  // variables
  const [notes, setNotes] = useState([]);

  // useEffect

  useEffect(() => {
    getNotes()
      .then(noteData => {
        setNotes(noteData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const getNotes = async () => {
    try {
      const existingNotes = await AsyncStorage.getItem(
        asyncStorageKeys.noteKey,
      );
      console.log('existingNotes ==', existingNotes);
      return existingNotes ? JSON.parse(existingNotes) : [];
    } catch (error) {
      console.error('Error getting notes:', error);
      return [];
    }
  };

  const goToAddNote = () => {
    navigation.navigate(Screens.AddNoteScreen, {note: {}, theme: 'light'});
  };

  // Render Component
  return (
    <ContainerView>
      {/* {notes.length > 0 ? (
        notes.map((note, index) => (
          <NoteItemView key={index}>
            <ItemText>{note}</ItemText>
          </NoteItemView>
        ))
      ) : ( */}
      <BlankView>
        <BlankImage source={Images.heroImage} resizeMode="contain" />
        <BoldTextView>
          <BoldText>All thoughts.</BoldText>
          <BoldText>One place.</BoldText>
        </BoldTextView>
        <DescText>
          Dive right in and clear that mind of yours by writing your thoughts
          down.
        </DescText>
        <GoImageView onPress={goToAddNote}>
          <GoImage source={Images.goImage} />
        </GoImageView>
      </BlankView>
      {/* )} */}
    </ContainerView>
  );
}
