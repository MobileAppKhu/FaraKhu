import {StyleSheet} from 'react-native';
import Colors from '../colors';

export default StyleSheet.create({
  rectangleOfTop: {
    backgroundColor: Colors.topColor(),
    width: '120%',
    height: '28%',
    transform: [{rotate: '-22deg'}],
    borderBottomLeftRadius: 75,
    position: 'absolute',
    left: '-7%',
    top: '-18%',
    borderWidth: 1,
    borderColor: 'black',
  },
  rectangleOfBottom: {
    backgroundColor: Colors.topColor(),
    width: '120%',
    height: '28%',
    transform: [{rotate: '-22deg'}],
    borderTopRightRadius: 75,
    position: 'absolute',
    right: '-7%',
    bottom: '-18%',
    borderWidth: 1,
    borderColor: 'black',
  },
  square: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '43%',
    width: '80.8%',
    height: '37.3%',
    borderWidth: 2,
    borderColor: Colors.topColor(),
    borderRadius: 25,
    marginBottom: '6%',
  },
  styleOfImage: {
    width: '28%',
    height: '17%',
    resizeMode: 'stretch',
  },
});
