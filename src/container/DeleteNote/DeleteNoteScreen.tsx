import React, {useEffect} from 'react';

// Mics Constants
import {
  BoldText,
  BoldTextView,
  ContainerView,
  DeleteButton,
  DeleteButtonText,
  DeleteImage,
  DeleteView,
  DescText,
} from './DeleteNoteScreenStyle';
import {
  BackImage,
  BackImageView,
  HeaderView,
} from '../AddNote/AddNoteScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {Images, Screens} from '../../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKeys} from '../../utils/theme/constants';

// Components

export default function DeleteNoteScreen(props: {noteId: any}) {
  //Variable
  const navigation = useNavigation();
  const {noteId} = props;
  // useEffect

  useEffect(() => {}, []);

  const onPressBack = () => {
    navigation.goBack();
  };

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

  const handleDeleteNote = async () => {
    // Implement your delete note logic here

    try {
      // Get existing notes
      const existingNotes = await getNotes();

      // Filter out the note to be deleted
      const updatedNotes = existingNotes;
      // .filter(
      //   (note: {id: any}) => note.id !== noteId,
      // );

      // Save the updated notes to AsyncStorage
      await AsyncStorage.removeItem(asyncStorageKeys.noteKey);

      console.log('Note deleted successfully.');
      navigation.navigate(Screens.NoteListScreen);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Render Component
  return (
    <ContainerView>
      <HeaderView>
        <BackImageView onPress={onPressBack}>
          <BackImage source={Images.backImage} />
        </BackImageView>
      </HeaderView>
      <DeleteView>
        <DeleteImage source={Images.deleteImage} resizeMode="contain" />
        <BoldTextView>
          <BoldText>You sure about this?</BoldText>
        </BoldTextView>
        <DescText>
          If you delete this note, threat not, you can still find it in the bin.
        </DescText>
        <DeleteButton onPress={handleDeleteNote}>
          <DeleteButtonText>Delete this note</DeleteButtonText>
        </DeleteButton>
      </DeleteView>
    </ContainerView>
  );
}
