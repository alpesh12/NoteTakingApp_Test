export enum RootStackScreens {
  Splash = 'SplashScreen',
  NoteStack = 'NoteStack',
}

export type RootStackParamList = {
  [RootStackScreens.Splash]: undefined;
  [RootStackScreens.NoteStack]: undefined;
};
