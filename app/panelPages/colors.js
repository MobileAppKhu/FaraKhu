import AsyncStorage from '@react-native-async-storage/async-storage';

const Colors = {
  topColor: () =>
    AsyncStorage.getItem('theme') === 'light'
      ? 'rgb(34,40,49)'
      : 'rgb(0,173,181)',
  bigButtonTextColor: () =>
    AsyncStorage.getItem('theme') === 'light'
      ? 'rgb(0,173,181)'
      : 'rgb(238,238,238)',
  accent: () =>
    AsyncStorage.getItem('theme') === 'light' ? '#ffffff' : '#000000',
};
export default Colors;
