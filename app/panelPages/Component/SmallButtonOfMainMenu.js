import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function ({message, imageAddress, marginRight}) {
  return (
    <TouchableOpacity
      style={[
        styles.smallButton,
        {
          marginRight: marginRight,
          backgroundColor: Colors.topColor(),
        },
      ]}
      activeOpacity={0.8}>
      <Image source={imageAddress} style={styles.smallButtonImage} />
      <Text
        style={[
          styles.smallButtonText,
          {
            color: Colors.bigButtonTextColor(),
          },
        ]}>
        {message}
      </Text>
    </TouchableOpacity>
  );
}
