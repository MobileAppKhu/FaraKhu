import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../colors';

export default StyleSheet.create({
  rectangleOfTop: {
    width: '120%',
    height:
      (Dimensions.get('window').width /
        Dimensions.get('window').height /
        2.00971361580974) *
      Dimensions.get('window').height,
    transform: [{rotate: '-22deg'}],
    borderBottomLeftRadius: 75,
    position: 'absolute',
    left: '-7%',
    top:
      -(
        Dimensions.get('window').width /
        Dimensions.get('window').height /
        3.052631578
      ) * Dimensions.get('window').height,
    borderWidth: 1,
    borderColor: 'black',
  },
  rectangleOfBottom: {
    width: '120%',
    height:
      (Dimensions.get('window').width /
        Dimensions.get('window').height /
        2.00971361580974) *
      Dimensions.get('window').height,
    transform: [{rotate: '-22deg'}],
    borderTopRightRadius: 75,
    position: 'absolute',
    right: '-7%',
    bottom:
      -(
        Dimensions.get('window').width /
        Dimensions.get('window').height /
        3.052631578
      ) * Dimensions.get('window').height,
    borderWidth: 1,
  },
  square: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '43%',
    width: '80.8%',
    height: '37.3%',
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: '6%',
  },
  containerStyleOfImage: {
    alignItems: 'center',
    height: '17%',
  },
  styleOfImage: {
    flex: 1,
    aspectRatio: 1,
  },
  contactTextStyle: {
    fontFamily: 'IranSans',
    fontSize: 17,
  },
  contactEmailStyle: {
    fontFamily: 'Samim',
    fontWeight: 'bold',
    fontSize: 20,
  },
  changeFlexDirectionToRowReverse: {
    flexDirection: 'row-reverse',
  },
  contactUsStyle: {flex: 1, alignItems: 'center'},
  topPartOfSuggestionPage: {
    height: '10%',
    width: '100%',
    borderBottomRightRadius: 100,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  bottomPartOfSuggestionPage: {
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    height: '10%',
    width: '100%',
    borderTopLeftRadius: 100,
  },
  suggestionBackgroundImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textOfSuggestion: {
    fontFamily: 'IranSans',
    marginLeft: '60%',
    fontSize: 25,
    marginTop: '26%',
  },
  animatedTextStyle: {
    fontFamily: 'Samim',
    fontWeight: 'bold',
    fontSize: 26,
  },
  suggestionSuccessfullyImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 75,
  },
  changePasswordStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundStyleOfChangePassword: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  containerStyleOfChangePassword: {
    height: '15%',
    alignItems: 'center',
    marginTop: '10%',
  },
  imageStyleOfChangePassword: {
    flex: 1,
    aspectRatio: 1,
  },
  topPartOfChangePassword: {
    height: '10%',
    width: '100%',
    borderBottomWidth: 0.5,
  },
  textStyleOfChangePassword: {
    fontFamily: 'Samim',
    fontWeight: 'bold',
    color: Colors.accent(),
    opacity: 0.4,
    fontSize: 15,
    marginBottom: '3%',
  },
  bottomPartOfChangePassword: {
    position: 'absolute',
    bottom: 0,
    height: '10%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
  },
  warningTextStyle: {
    color: 'red',
    fontFamily: 'Samim',
    fontWeight: 'bold',
    fontSize: 15,
  },
  topPartOfForgetPassword: {
    height: '12%',
    width: '100%',
    backgroundColor: Colors.topColor(),
    borderBottomRightRadius: 100,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.borderTopColor(),
  },
  forgetPasswordStyle: {
    backgroundColor: Colors.backgroundColor(),
    flex: 1,
    alignItems: 'center',
  },
  bottomPartOfForgetPassword: {
    borderWidth: 1,
    marginTop: '8%',
    alignItems: 'center',
    width: '100%',
    height: '40%',
    backgroundColor: Colors.topColor(),
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
  },
  forgetPasswordImage: {
    width: '28%',
    resizeMode: 'stretch',
    height: '16%',
    marginTop: '15%',
  },
  forgetPasswordText: {
    marginTop: '7%',
    opacity: 0.7,
    color: 'rgb(57,62,70)',
    fontFamily: 'Samim-Bold',
    fontSize: 15,
  },
});
