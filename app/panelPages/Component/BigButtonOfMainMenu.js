import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function BigButtonOfMainMenu({
  message,
  imageAddress,
  onPressFunction,
}) {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[styles.bigButton, {backgroundColor: Colors.topColor()}]}
      activeOpacity={0.8}>
      <Text
        style={[styles.bigButtonText, {color: Colors.bigButtonTextColor()}]}>
        {message}
      </Text>
      <Image source={imageAddress} style={styles.bigButtonImage} />
    </TouchableOpacity>
  );
}
