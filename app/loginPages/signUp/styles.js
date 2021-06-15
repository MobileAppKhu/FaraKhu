import {StyleSheet} from 'react-native';
import {WhiteTextInput} from './VerificationCodePage';

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
  progressBar: {
    marginTop: '3%',
    width: '56%',
    height: '5%',
    resizeMode: 'stretch',
  },
  whoAreYou: {
    fontSize: 22,
    color: 'rgb(238,238,238)',
    marginTop: '23%',
    fontWeight: '400',
  },
  logoSortView: {
    marginTop: '3%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  studentLogo: {
    height: '100%',
    width: 93,
    marginRight: '2.5%',
    resizeMode: 'stretch',
  },
  firstSignUpPageText: {
    marginTop: 1,
    fontSize: 15,
    color: 'rgb(238,238,238)',
  },
  professorLogo: {
    height: '100%',
    width: 93,
    marginLeft: '2.5%',
    resizeMode: 'stretch',
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
  toolTipIconView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  signUpSuccessfully: {
    resizeMode: 'stretch',
    width: '100%',
    height: ' 51%',
    marginTop: '3.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verificationCodeImage: {
    resizeMode: 'stretch',
    width: '22%',
    height: '12.6%',
    marginTop: '22%',
  },
  whiteTextInput: {
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 3,
    borderWidth: 1,
    borderColor: 'rgb(0,173,181)',
  },
  codeSent: {
    fontSize: 14,
    color: 'rgb(238,238,238)',
    marginTop: 25,
    marginBottom: 35,
  },
});
