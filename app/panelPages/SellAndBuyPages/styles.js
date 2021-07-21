import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainProfileView: {
    flex: 1,
  },
  searchSection: {
    marginHorizontal: '10%',
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  separatorLine: {
    opacity: 0.5,
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 1,
  },
  searchTextInput: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112,112,112, 0.5)',
    height: '60%',
    flex: 4.5,
    borderRadius: 20,
  },
  filter: {
    flex: 1.25,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(112,112,112,0.2)',
    height: '60%',
    marginLeft: 12,
  },
  verticalSeparatorLine: {
    width: StyleSheet.hairlineWidth,
    height: 30,
    borderRadius: 5,
    opacity: 0.8,
    margin: 2,
  },
  bookPlacardsContainer: {
    marginTop: 5,
    marginHorizontal: '10%',
    marginBottom: '24%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
    borderTopWidth: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  backgroundStyleOfAdvertisementPage: {
    flex: 1,
  },
  mainBackgroundOfAdvertisementPage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 200,
    alignItems: 'center',
    borderBottomRightRadius: 200,
  },
  topPartOfMakeAdvertisementPage: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  titleOfMakeAdvertisementPage: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  titleOfMakeAdvertisementPageText: {fontFamily: 'Samim', fontSize: 20},
  dataInputsContainer: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 3,
    width: '90%',
    paddingRight: '6%',
  },
  textInputTitle: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  boldTextOfInputTitle: {
    fontFamily: 'Samim-Bold',
    fontSize: 18,
    color: 'rgb(130,133,138)',
  },
  regularTextOfInputTitle: {
    fontFamily: 'Samim',
    fontSize: 12,
    color: 'rgba(130,133,138,1)',
  },
  customTextInput: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,173,181, 0.5)',
    marginLeft: '10%',
    marginTop: 3,
    paddingRight: 5,
  },
  placardTypeAndImageContainer: {
    width: '90%',
    flexDirection: 'row-reverse',
    paddingHorizontal: '7%',
    marginTop: 15,
  },
  placardType: {
    flex: 1,
  },
  placardTypeOption: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placardImageSection: {
    flex: 1,
    marginRight: '10%',
  },
  placardImageContainer: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(0,173,181, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bookImageContainer: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookImage: {
    height: '90%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  bookTitle: {
    fontFamily: 'Samim',
    fontSize: 20,
    marginHorizontal: '12.5%',
  },
  bookPriceContainer: {
    width: '75%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  bookDescription: {
    width: '75%',
    marginTop: 5,
  },
  mainViewOfDeletePlacardModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deletePlacardModal: {
    alignItems: 'center',
    width: '80%',
    height: '25%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgb(0,173,181)',
    paddingHorizontal: 5,
  },
  deletePlacardModalIcon: {
    width: '20%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  deletePlacardModalText: {
    fontFamily: 'Samim',
    fontSize: 18,
    marginTop: 10,
  },
  deletePlacardModalButtons: {
    flexDirection: 'row-reverse',
    width: '80%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});
