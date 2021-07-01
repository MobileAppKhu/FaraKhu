import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(57,62,70)',
    borderBottomLeftRadius: 231,
    borderTopRightRadius: 100,
  },
  loadingBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(57,62,70)',
  },
  rectangleOfLoadingTop: {
    left: '-14%',
    top:
      -(
        Dimensions.get('window').width /
        Dimensions.get('window').height /
        3.308823529
      ) * Dimensions.get('window').height,
    position: 'absolute',
    width: '80%',
    height:
      (Dimensions.get('window').width /
        Dimensions.get('window').height /
        1.875) *
      Dimensions.get('window').height,
    backgroundColor: 'rgb(0,173,181)',
    transform: [{rotate: '-30deg'}],
    borderBottomLeftRadius: 100,
  },
  firstLoadingImageContainer: {
    width: '41%',
    flexDirection: 'row',
  },
  firstLoadingImage: {
    flex: 1,
    aspectRatio: 1,
  },
  rectangleOfLoadingBottom: {
    width: '80%',
    height:
      (Dimensions.get('window').width /
        Dimensions.get('window').height /
        1.875) *
      Dimensions.get('window').height,
    backgroundColor: 'rgb(0,173,181)',
    position: 'absolute',
    right: '-14%',
    bottom:
      -(
        Dimensions.get('window').width /
        Dimensions.get('window').height /
        3.308823529
      ) * Dimensions.get('window').height,
    borderTopRightRadius: 100,
    transform: [{rotate: '-30deg'}],
  },
  sign_up_image: {
    flex: 1,
    aspectRatio: 1,
  },
  sign_up_image_container: {
    width: '25.8%',
    flexDirection: 'row',
  },
  text_input_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetPassword: {
    color: 'white',
    fontSize: 16,
    opacity: 0.4,
    fontWeight: '700',
  },
  greenPartDownPage: {
    flex: 1,
    width: '100%',
    borderWidth: 2,
    alignItems: 'center',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 220,
    borderColor: 'rgba(0,0,0, 0.4)',
    backgroundColor: 'rgb(0,173,181)',
  },
  secondLoadingImage: {
    width: '50%',
    height: '40%',
    resizeMode: 'stretch',
  },
});
