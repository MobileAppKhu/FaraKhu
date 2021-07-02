import {StyleSheet} from 'react-native';
import Colors from '../colors';

export default StyleSheet.create({
  bigButton: {
    flexDirection: 'row-reverse',
    height: '13.6%',
    width: '80%',
    alignItems: 'center',
    backgroundColor: Colors.topColor(),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
    marginTop: '8%',
    marginBottom: '2.5%',
  },
  bigButtonText: {
    justifyContent: 'center',
    marginRight: '13%',
    marginLeft: '22.5%',
    fontSize: 20,
    fontFamily: 'Samim',
    color: Colors.bigButtonTextColor(),
  },
  bigButtonImage: {
    resizeMode: 'stretch',
    height: '76%',
    width: '25%',
  },
  smallButton: {
    // height: '15.6%',
    // width: '39%',
    height: '100%',
    width: '48%',
    alignItems: 'center',
    backgroundColor: Colors.topColor(),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  smallButtonImage: {
    marginTop: '5%',
    width: '40%',
    height: '65%',
    resizeMode: 'stretch',
  },
  smallButtonText: {
    marginTop: '2%',
    color: Colors.bigButtonTextColor(),
    fontSize: 12,
    fontFamily: 'Samim',
    fontWeight: '100',
  },
  profileStyle: {
    flex: 1,
    width: 90,
    height: 90,
    backgroundColor: Colors.topColor(),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgb(238,238,238)',
    position: 'absolute',
    bottom: '4%',
  },
  profileContainerStyle: {
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImageStyle: {flex: 1, aspectRatio: 1},
  faraKhuBackButton: {
    position: 'absolute',
    top: 80,
    left: 50,
    transform: [{rotate: '22deg'}],
    opacity: 0.5,
  },
  BackButton: {
    opacity: 0.5,
    marginRight: '75%',
    marginTop: '3%',
  },
  faraKhuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 238,
    backgroundColor: Colors.topColor(),
    borderWidth: 1,
    borderRadius: 20,
  },
  textOfFaraKhuButton: {
    fontFamily: 'Samim',
    fontSize: 19,
    color: 'white',
    opacity: 0.85,
  },
  textInputStyle: {
    marginTop: '3%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.topColor(),
    width: '82%',
    height: '35%',
    backgroundColor: 'white',
  },
  customTextInput: {
    flexDirection: 'row-reverse',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.topColor(),
    borderWidth: 1,
    borderColor: 'grey',
    height: '6.4%',
    width: '80%',
    borderRadius: 20,
  },
});
