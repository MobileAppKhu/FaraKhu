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
  faraKhuLogo: {
    marginTop: '-15%',
    height: '40%',
    resizeMode: 'contain',
  },
  addUserLogo: {
    resizeMode: 'stretch',
    height: '7%',
    width: '12.4%',
    marginTop: '7.3%',
  },
  progressBar: {
    marginTop: '2%',
    width: '56%',
    height: '5%',
    resizeMode: 'stretch',
  },
  professorLogo: {
    height: '100%',
    width: 93,
    marginLeft: '2.5%',
    resizeMode: 'stretch',
  },
  studentLogo: {
    height: '100%',
    width: 93,
    marginRight: '2.5%',
    resizeMode: 'stretch',
  },
  signUp: {
    marginTop: '1%',
    width: '25.8%',
    height: '15%',
    resizeMode: 'stretch',
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
  customTextInput: {
    flexDirection: 'row-reverse',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(34,40,49)',
    borderWidth: 1,
    borderColor: 'grey',
    height: '6.4%',
    width: '80%',
    borderRadius: 20,
  },
  iconImage: {
    resizeMode: 'stretch',
    width: '16%',
    height: '80%',
    marginRight: '3%',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
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
  forgetPassword: {
    color: 'white',
    fontSize: 16,
    opacity: 0.4,
    fontWeight: '700',
  },
  whoAreYou: {
    fontSize: 22,
    color: 'rgb(238,238,238)',
    marginTop: '7%',
    fontWeight: '400',
  },
  BackButton: {
    marginRight: '75%',
  },
  logoSortView: {
    marginTop: '3%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstSignUpPageText: {
    marginTop: 1,
    fontSize: 15,
    color: 'rgb(238,238,238)',
  },
  iconFaraKhuTextInput: {
    // marginRight: '2%',
  },
  toolTipIconView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  toolTipIcon: {
    marginLeft: '-5%',
  },
  forgetPasswordImage: {
    resizeMode: 'stretch',
    width: '21.5%',
    height: '12.3%',
    marginTop: '24%',
  },
});
