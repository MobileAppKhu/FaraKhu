import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from '../../loginPages/Component/styles';
import {Icon} from 'react-native-elements';

export default function FaraKhuBackButton({navigationFunction, color}) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 70,
        left: 50,
        transform: [{rotate: '22deg'}],
        opacity: 0.5,
      }}>
      <TouchableOpacity onPress={navigationFunction} activeOpacity={0.8}>
        <Icon
          name={'chevron-thin-left'}
          size={45}
          color={'rgb(57,62,70)'}
          type={'entypo'}
        />
      </TouchableOpacity>
    </View>
  );
}
