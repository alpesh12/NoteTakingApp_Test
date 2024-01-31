import {Dimensions} from 'react-native';

export const appointment = {};

export const commonConstant = {
  appName: 'NoteTakingApp',
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,
};

export const asyncStorageKeys = {
  noteKey: 'notes',
};

export default {
  commonConstant,
  asyncStorageKeys,
};
