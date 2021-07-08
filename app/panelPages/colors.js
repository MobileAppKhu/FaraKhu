import AsyncStorage from '@react-native-async-storage/async-storage';

const Colors = {
  topColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  borderTopColor: () =>
    window.Theme !== 'dark' ? 'rgba(34,40,49,0.5)' : 'rgba(0,173,181,0.5)',
  bigButtonTextColor: () =>
    window.Theme !== 'light' ? 'rgb(0,173,181)' : 'rgb(238,238,238)',
  contactUsPageTextColor: () =>
    window.Theme !== 'light' ? 'rgb(0,173,181)' : 'rgb(34,40,49)',

  accent: () => (window.Theme === 'dark' ? '#ffffff' : '#000000'),
  backgroundColor: () =>
    window.Theme === 'dark' ? 'rgb(57,62,70)' : 'rgb(238,238,238)',
  textHolderColor: () => (window.Theme === 'dark' ? 'grey' : 'black'),
};
export default Colors;
