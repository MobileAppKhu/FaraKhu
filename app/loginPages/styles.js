import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    borderBottomLeftRadius: 231,
    borderTopRightRadius: 100,
    alignItems: 'center',
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
  faraKhuLogo: {
    marginTop: '-15%',
    height: '40%',
    resizeMode: 'contain',
  },
  textCenter: {
    color: 'rgb(238,238,238)',
    fontFamily: 'Samim-Regular',
  },
  textCenterView: {
    alignItems: 'center',
    paddingTop: '30%',
  },
  logoOfApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  loadingViewStyle: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIcon: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
