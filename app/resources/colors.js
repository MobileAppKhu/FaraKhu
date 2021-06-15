import AsyncStorage from '@react-native-async-storage/async-storage';

const Colors = {
  primary: () =>
    AsyncStorage.getItem('theme') === 'dark' ? '#ffffff' : '#000000',
  secondary: () =>
    AsyncStorage.getItem('theme') === 'light' ? '#ffffff' : '#000000',
  accent: () =>
    AsyncStorage.getItem('theme') === 'light' ? '#ffffff' : '#000000',
};
export default Colors;
