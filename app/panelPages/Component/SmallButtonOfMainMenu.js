import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function ({
  message,
  imageAddress,
  marginRight,
  onPressFunction,
}) {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[
        styles.smallButton,
        {
          marginRight: marginRight,
          backgroundColor: Colors.topColor(),
          borderColor: Colors.borderTopColor(),
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
