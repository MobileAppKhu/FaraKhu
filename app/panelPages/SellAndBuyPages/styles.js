import {StyleSheet} from 'react-native';
import Colors from '../colors';

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
  bookPlacardsSection: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: '10%',
  },
  bookPlacard: {
    flexDirection: 'row-reverse',
    borderRadius: 15,
    marginHorizontal: '10%',
    marginVertical: 10,
    borderWidth: 1,
    height: 140,
    padding: 10,
  },
  placardDescription: {
    flex: 1.5,
    // backgroundColor: 'red',
    marginTop: 10,
  },
  placardTitle: {
    fontFamily: 'Samim',
    fontSize: 16,
  },
  bookPriceConatiner: {
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  bookPrice: {
    fontFamily: 'Samim',
    fontSize: 12,
    color: 'rgb(0,173,181)',
    marginRight: 10,
  },
  placardImageConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gold',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(112,112,112, 0.2)',
  },
  placardImage: {
    flex: 1,
    // height: ' 90%',
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
  },
});
