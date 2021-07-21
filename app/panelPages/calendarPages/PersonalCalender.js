import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Colors from '../colors';
import FaraKhuButton from '../Component/FaraKhuButton';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {BackgroundImage} from 'react-native-elements/dist/config';

export default function PersonalCalender({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <BackgroundImage
        source={require('../../resources/photos/PanelPages/topPartOfCalender.png')}
        resizeMode={'stretch'}
        style={{
          position: 'absolute',
          height: Dimensions.get('window').height * 0.15,
          width: Dimensions.get('window').width,
          flex: 1,
          aspectRatio: 1,
        }}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </BackgroundImage>
    </View>
  );
}
