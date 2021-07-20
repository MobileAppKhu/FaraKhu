import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundStyleOfMyLessonPage: {
    flex: 1,
    width: '100%',
  },
  mainBackgroundOfMyLessonPage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 160,
    alignItems: 'center',
    borderBottomRightRadius: 400,
  },
  textStyleOfTopTextOfMyLessonPage: {
    fontSize: 20,
    fontFamily: 'Samim',
    marginBottom: '5%',
  },
  myButtonStyle: {
    marginBottom: 10,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.075,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  viewAllLessonPageStyle: {
    fontSize: 20,
    fontFamily: 'IranSans',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  myButtonImageStyle: {
    flex: 1,
    width: '90%',
  },
  myButtonViewStyle: {
    flex: 1,
    paddingHorizontal: '1%',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
