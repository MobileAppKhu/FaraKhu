import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  mainView: {flex: 1, alignItems: 'center', height: '100%', width: '100%'},
  topPartImage: {
    position: 'relative',
    top: 0,
    height: '40%',
    marginBottom: '-30%',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  todayText: {
    fontFamily: 'Samim',
    fontSize: 35,
  },
  textOfTopPart: {alignItems: 'center'},
  monthTextTopPart: {fontSize: 30, fontFamily: 'Samim'},
  yearTextTopPart: {fontSize: 30, fontFamily: 'Samim'},
  dividerLineTopPart: {
    width: 0.9,
    height: '50%',
    marginRight: '10%',
  },
  dayTextTopPart: {
    fontSize: 40,
    fontFamily: 'Samim',
  },
  calenderView: {
    // marginTop: '26.7%',
    height: '50%',
    width: '100%',
    alignItems: 'center',
  },
  pickersView: {
    marginTop: '-3%',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickerStyle: {
    marginLeft: '1.5%',
    marginRight: '1.5%',
    width: '25%',
    justifyContent: 'center',
    height: '40%',
    borderWidth: 1,
    borderRadius: 20,
  },
  pickerItems: {
    fontSize: RFValue(13, 812),
    fontFamily: 'IRANSans-Regular',
    color: 'black',
    width: '100%',
  },
  bottomPartImage: {
    position: 'relative',
    bottom: '10%',
    width: Dimensions.get('window').width,
    height: '73.5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moreInfoText: {
    marginTop: '4%',
    fontSize: RFValue(12, 812),
    fontFamily: 'Samim',
  },
  calenderButton: {
    width: '48%',
    alignItems: 'center',
    height: '9.5%',
    justifyContent: 'center',
    borderRadius: 17,
    borderWidth: 1,
    marginTop: '7%',
  },
  calenderButtonLabel: {
    fontSize: RFValue(14, 812),
    fontFamily: 'Samim',
    color: 'white',
  },
});
