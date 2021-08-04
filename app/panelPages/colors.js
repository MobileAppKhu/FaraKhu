const Colors = {
  topColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  borderTopColor: () =>
    window.Theme !== 'dark' ? 'rgba(34,40,49,0.5)' : 'rgba(0,173,181,0.5)',
  bigButtonTextColor: () =>
    window.Theme !== 'light' ? 'rgb(0,173,181)' : 'rgb(258,258,258)',
  contactUsPageTextColor: () =>
    window.Theme !== 'light' ? 'rgb(0,173,181)' : 'rgb(34,40,49)',

  accent: () => (window.Theme === 'dark' ? '#ffffff' : '#000000'),
  backgroundColor: () =>
    window.Theme === 'dark' ? 'rgb(57,62,70)' : 'rgb(238,238,238)',
  textHolderColor: () => (window.Theme === 'dark' ? 'grey' : 'black'),
  backButtonColor: () =>
    window.Theme === 'light' ? 'rgb(34,40,49)' : 'rgb(0,173,181)',
  calendarTextColor: () => (window.Theme === 'dark' ? '#000000' : '#ffffff'),
  homeButtonBorderColor: () => ('light' ? 'rgb(40,100,100)' : 'rgb(0,173,181)'),
  makeAdvertisementTextInputBackColor: () =>
    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'white',
  verticalSeparatorLineColor: () =>
    window.Theme === 'dark' ? 'rgba(0,173,181,0.5)' : 'rgba(112,112,112, 0.5)',
  blackOrGray: () => (window.Theme === 'light' ? 'dark' : 'grey'),
};
export default Colors;
