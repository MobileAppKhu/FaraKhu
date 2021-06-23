import AsyncStorage from '@react-native-async-storage/async-storage';

const Colors = {
  topColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  bigButtonTextColor: () =>
    window.Theme === 'light' ? 'rgb(0,173,181)' : 'rgb(238,238,238)',
  accent: () => (window.Theme ? '#ffffff' : '#000000'),
};
export default Colors;
