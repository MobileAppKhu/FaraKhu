import {StyleSheet} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  topPart: {
    backgroundColor: Colors.topColor(),
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
    height: '100%',
    width: '43.5%',
    marginLeft: '13%',
  },
  leftPhotoStyle: {height: '100%', width: '43.5%'},
  bottomPart: {
    backgroundColor: Colors.topColor(),
    height: '9%',
    width: '100%',
    alignItems: 'center',
    marginTop: '2.1%',
  },
});
