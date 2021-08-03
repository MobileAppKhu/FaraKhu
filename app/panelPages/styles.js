import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topPart: {
    height: '9%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  menuLogoImage: {
    height: '45%',
    width: '10%',
    marginRight: '5%',
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
    justifyContent: 'space-between',
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
    width: '39.5%',
    // marginLeft: '17%',
  },
  leftPhotoContainerStyle: {width: '43.5%'},
  bottomPart: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: '2.1%',
  },
  faraKhuLogo: {
    height: '95%',
    marginTop: '2%',
  },
  separatorLine: {
    opacity: 0.2,
    width: '90%',
    height: 1,
    marginTop: '1.5%',
    marginBottom: '1.5%',
    marginLeft: '5%',
  },
  iconTextStyle: {
    fontSize: 12,
    opacity: 0.9,
    fontFamily: 'Samim',
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
    position: 'absolute',
    bottom: '5%',
    fontFamily: 'IranSans',
  },
});
