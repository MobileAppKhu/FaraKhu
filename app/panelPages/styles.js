import {StyleSheet} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  topPart: {
    // backgroundColor: Colors.topColor(),
    height: '9%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  menuLogoImage: {
    height: '36%',
    width: '8%',
    resizeMode: 'stretch',
    marginRight: '10%',
  },
  towButtonViewStyle: {
    height: '12%',
    width: '80%',
    flexDirection: 'row-reverse',
    alignContent: 'space-around',
    marginBottom: '1.2%',
  },
  viewOfTwoImage: {
    flexDirection: 'row-reverse',
    height: '23%',
    width: '100%',
  },
  rightPhotoStyle: {
    flex: 1,
    aspectRatio: 1,
  },
  rightPhotoContainerStyle: {
    // height: '100%',
    // marginRight: '-3.8%',
    width: '43.5%',
    marginLeft: '17%',
  },
  leftPhotoContainerStyle: {width: '43.5%'},
  bottomPart: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: '2.1%',
  },
  faraKhuLogo: {
    width: '31%',
    height: '80%',
    resizeMode: 'stretch',
    marginTop: '5%',
  },
  separatorLine: {
    opacity: 0.2,
    width: '90%',
    height: 1,
    backgroundColor: 'rgb(238,238,238)',
    marginLeft: '5%',
  },
  iconTextStyle: {
    fontSize: 11,
    fontFamily: 'IranSans',
    fontWeight: '200',
  },
  iconViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTextStyle: {
    height: '100%',
    width: '80%',
    alignItems: 'center',
  },
  customDrawerStyle: {
    alignItems: 'center',
    height: '20%',
    marginBottom: '7%',
  },
  faraKhuTextLogoStyle: {
    fontFamily: 'Wasm-font-Bold',
    fontSize: 20,
    marginRight: '27%',
    color: 'rgb(238,238,238)',
    fontWeight: 'bold',
  },
  profileTextStyle: {
    marginTop: '11%',
    fontFamily: 'IranSans',
    fontWeight: 'bold',
  },
});
