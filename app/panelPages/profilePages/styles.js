import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  topRectangle: {
    marginTop: '-30%',
    width: '120%',
    height:
        (Dimensions.get('window').width /
            Dimensions.get('window').height /
            1.607142857) *
        Dimensions.get('window').height,
    borderBottomLeftRadius: 100,
    transform: [{rotate: '-28deg'}],
  },
  textViewStyle: {
    transform: [{rotate: '28deg'}],
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldTextOfTopPart: {
    fontSize: 20,
    fontFamily: 'Samim-Bold',
    marginTop: '5%',
  },
  normalTextOfTopPart: {
    fontSize: 15,
    fontFamily: 'Samim',
    opacity: 0.9,
    marginTop: '5%',
  },
  mainProfileViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  profileViewStyle: {
    borderRadius: 1000,
    width: '23%',
    height: '45%',
    top: '85%',
    right: '35%',
    position: 'absolute',
    backgroundColor: 'rgb(238,238,238)',
    transform: [{rotate: '28deg'}],
  },
  profileImageStyle: {flex: 1, aspectRatio: 1, borderRadius: 1000},
  separatorLine: {
    height: 1,
    width: '80.5%',
    backgroundColor: 'rgb(34,40,49)',
    opacity: 0.2,
    marginTop: '3%',
  },
  viewOfTexts: {
    flexDirection: 'row-reverse',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomPartOfProfilePage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '11%',
  },
  topPartOfEditProfile: {
    height: '10%',
    width: '100%',
  },
  editProfileImage: {width: '29.6%', flexDirection: 'row', marginTop: '3.6%'},
  changeProfilePhotoStyle: {
    width: '28%',
    height: '30%',
    borderRadius: 1000,
    backgroundColor: 'rgb(0,173,181)',
    marginTop: '65%',
    marginLeft: '-25%',
  },
  customTextInputViewStyle: {
    alignItems: 'flex-end',
    width: '80.5%',
    height: '7%',
    marginBottom: '4%',
  },
  customTextInputTextInputStyle: {
    width: '100%',
    textAlign: 'right',
    fontSize: 18,
    height: '80%',
    fontFamily: 'Samim',
  },
  customTextInputTopic: {
    fontSize: 12,
    fontFamily: 'Samim-Bold',
    color: 'rgb(0,173,181)',
  },
  customTextInputLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgb(112,112,112)',
    opacity: 0.3,
    marginTop: '-3%',
  },
  checkEmailShowView: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '80.5%',
    marginBottom: '5%',
  },
  bottomPartOfEditProfile: {
    width: '100%',
    flex: 1,
    marginTop: '3%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});
