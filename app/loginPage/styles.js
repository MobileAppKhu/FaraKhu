import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    borderBottomLeftRadius: 231,
    borderTopRightRadius: 100,
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
  textCenterView: {
    alignItems: 'center',
    paddingTop: '30%',
  },
  textCenter: {
    color: 'rgb(238,238,238)',
    fontFamily: 'Samim-Regular',
  },
  logoOfApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: '-15%',
    height: '40%',
    resizeMode: 'contain',
  },
  buttonLogIn: {
    width: '63%',
    height: '16%',
    backgroundColor: 'rgb(57,62,70)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0, 0.4)',
  },
});
