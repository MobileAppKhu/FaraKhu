import {StyleSheet} from 'react-native';
import {getFontFamily} from './FaraKhuText';
import Colors from '../../panelPages/colors';

export default StyleSheet.create({
  BackButton: {
    marginRight: '75%',
    marginTop: '3%',
  },
  buttonLogIn: {
    width: 268,
    height: 60,
    backgroundColor: 'rgb(57,62,70)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0, 0.4)',
  },
  customTextInput: {
    shadowOpacity: 0.1,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      height: 12,
      width: 12,
    },
    shadowRadius: 1000,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    height: '6.4%',
    width: '80%',
    borderRadius: 20,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    borderBottomLeftRadius: 231,
    borderTopRightRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordChangeSuccessfullyText: {
    // position: 'absolute',
    // top: '40%',
    // right: '12%',
    color: 'rgb(238,238,238)',
    fontSize: 28,
    fontFamily: getFontFamily('normal'),
  },
  greenPartDownPage: {
    backgroundColor: 'rgb(0,173,181)',
    width: '100%',
    height: '47%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 220,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0, 0.4)',
  },
  faraKhuTextInputStyle: {
    width: StyleSheet.hairlineWidth,
    height: 35,
    backgroundColor: 'grey',
    borderRadius: 5,
    opacity: 0.8,
    margin: 2,
  },
});
