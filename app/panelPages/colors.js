import AsyncStorage from '@react-native-async-storage/async-storage';

const Colors = {
  topColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  borderTopColor: () =>
    window.Theme !== 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  bigButtonTextColor: () =>
    window.Theme === 'light' ? 'rgb(0,173,181)' : 'rgb(238,238,238)',
  accent: () => (window.Theme === 'dark' ? '#ffffff' : '#000000'),
  backgroundColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(238,238,238)',
  textHolderColor: () => (window.Theme === 'dark' ? 'grey' : 'black'),
};
export default Colors;
