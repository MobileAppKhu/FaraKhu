import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainProfileView: {
    flex: 1,
  },
  searchSection: {
    marginHorizontal: '10%',
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  separatorLine: {
    opacity: 0.2,
    width: '90%',
    height: 1,
    backgroundColor: 'rgb(238,238,238)',
    marginLeft: '5%',
  },
  searchTextInput: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112,112,112, 0.5)',
    height: '60%',
    flex: 4.5,
    borderRadius: 20,
  },
  filter: {
    flex: 1.25,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(112,112,112,0.2)',
    height: '60%',
    marginLeft: 12,
  },
  verticalSeparatorLine: {
    width: StyleSheet.hairlineWidth,
    height: 30,
    backgroundColor:
      window.Theme === 'dark'
        ? 'rgba(0,173,181,0.5)'
        : 'rgba(112,112,112, 0.5)',
    borderRadius: 5,
    opacity: 0.8,
    margin: 2,
  },
});
