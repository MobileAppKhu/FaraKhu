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
  progressBarContainer: {
    marginTop: '-20%',
    width: '60%',
    flexDirection: 'row',
  },
  progressBar: {
    flex: 1,
    aspectRatio: 1,
  },
  whoAreYou: {
    fontSize: 24,
    color: 'rgb(238,238,238)',
    marginTop: '-7%',
    fontFamily: 'IRANSans-regular',
  },
  logoSortView: {
    marginTop: '3%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  studentLogoContainer: {
    alignItems: 'center',
    width: '19%',
    marginRight: '2.5%',
  },
  studentLogo: {
    width: '44%',
    flex: 1,
    aspectRatio: 1,
  },
  firstSignUpPageText: {
    marginTop: 1,
    fontSize: 15,
    color: 'rgb(238,238,238)',
  },
  professorLogoContainer: {
    marginLeft: '2.5%',
    alignItems: 'center',
    width: '19%',
  },
  professorLogo: {
    width: '44%',
    flex: 1,
    aspectRatio: 1,
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
    flex: 1,
    aspectRatio: 1,
  },
  verificationCodeImageContainer: {
    alignItems: 'center',
    height: '22%',
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
