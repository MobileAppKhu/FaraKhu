import {StyleSheet} from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  topRectangle: {
    marginTop: '-30%',
    width: '120%',
    height: '35%',
    borderBottomLeftRadius: 100,
    transform: [{rotate: '-28deg'}],
  },
  textViewStyle: {
    transform: [{rotate: '28deg'}],
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldTextOfTopPart: {
    fontSize: 20,
    fontFamily: 'Samim-Bold',
    marginTop: '5%',
  },
  normalTextOfTopPart: {
    fontSize: 15,
    fontFamily: 'Samim',
    opacity: 0.9,
    marginTop: '5%',
  },
  mainProfileViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  profileViewStyle: {
    borderRadius: 1000,
    width: '23%',
    height: '45%',
    top: '85%',
    right: '35%',
    position: 'absolute',
    backgroundColor: 'rgb(238,238,238)',
    transform: [{rotate: '28deg'}],
  },
  profileImageStyle: {flex: 1, aspectRatio: 1, borderRadius: 1000},
  separatorLine: {
    height: 1,
    width: '80.5%',
    backgroundColor: 'rgb(34,40,49)',
    opacity: 0.2,
    marginTop: '3%',
  },
  viewOfTexts: {
    flexDirection: 'row-reverse',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomPartOfProfilePage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '11%',
  },
});
