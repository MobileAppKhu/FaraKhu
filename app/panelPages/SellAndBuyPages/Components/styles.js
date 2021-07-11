import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
    borderWidth: 2,
  },
  buttonImage: {
    flex: 1,
    resizeMode: 'center',
  },
  bookPlacard: {
    flexDirection: 'row-reverse',
    borderRadius: 15,
    // marginHorizontal: '10%',
    marginVertical: 10,
    borderWidth: 1,
    height: 140,
    padding: 10,
  },
  placardDescription: {
    flex: 1.5,
    marginTop: 10,
  },
  placardTitle: {
    fontFamily: 'Samim',
    fontSize: 16,
  },
  bookPriceConatiner: {
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  bookPrice: {
    fontFamily: 'Samim',
    fontSize: 12,
    color: 'rgb(0,173,181)',
    marginRight: 10,
  },
  placardImageConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
  },
  placardImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});
