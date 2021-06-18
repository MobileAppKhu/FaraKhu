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
    width: 67,
    height: 67,
    backgroundColor: 'red',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgb(238,238,238)',
    marginTop: '-10%',
    // position: 'absolute',
    // bottom: 20,
  },
  profileImageStyle: {width: '70%', height: '70%', resizeMode: 'stretch'},
});