import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../colors';
import FaraKhuButton from '../Component/FaraKhuButton';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';

export default function PersonalCalender({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FaraKhuBackButton
        navigationFunction={() => {
          navigation.pop();
        }}
      />
      <View
        style={[
          {backgroundColor: Colors.topColor()},
          {
            width: '140%',
            borderBottomLeftRadius: 5000,
            borderBottomRightRadius: 5000,
            height: '30%',
            marginTop: '-25%',
          },
        ]}>
        <FaraKhuBackButton />
      </View>
    </View>
  );
}
