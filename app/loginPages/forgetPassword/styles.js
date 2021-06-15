import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolTipIcon: {
    marginLeft: '-5%',
  },
  background: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    borderBottomLeftRadius: 231,
    borderTopRightRadius: 100,
    alignItems: 'center',
  },
  lockLogoImage: {
    resizeMode: 'stretch',
    width: '25.4%',
    height: '14.7%',
    marginTop: '14%',
  },
  toolTipIconView: {
    flexDirection: 'row-reverse',
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
  forgetPasswordImage: {
    resizeMode: 'stretch',
    width: '21.5%',
    height: '12.3%',
    marginTop: '24%',
  },
  textOfForgetPassword: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(238,238,238)',
    opacity: 0.75,
    marginTop: '4.5%',
  },
  keyLogosImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: ' 100%',
    marginTop: '3.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
