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
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 1,
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
    borderRadius: 5,
    opacity: 0.8,
    margin: 2,
  },
  bookPlacardsContainer: {
    marginTop: 5,
    marginHorizontal: '10%',
    marginBottom: '24%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
    borderTopWidth: 2,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
});
