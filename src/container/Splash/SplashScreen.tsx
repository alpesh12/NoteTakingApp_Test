import React, {useContext, useEffect} from 'react';

// Mics Constants
import {Colors} from '../../utils/theme';
import {Indicator, SplashContainerView} from './SplashScreenStyle';
import {AppContext} from '../../utils/context/contextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKeys} from '../../utils/theme/constants';

// Components

export default function SplashScreen() {
  //Variable
  const {setIsLoading} = useContext(AppContext);

  // useEffect

  useEffect(() => {
    setTimeout(() => {
      getNotes()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {});
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Render Component
  return (
    <SplashContainerView>
      <Indicator size={'large'} color={Colors.black} />
    </SplashContainerView>
  );
}
