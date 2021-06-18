import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ({message, imageAddress, marginRight}) {
  return (
    <TouchableOpacity
      style={[styles.smallButton, {marginRight: marginRight}]}
      activeOpacity={0.8}>
      <Image source={imageAddress} style={styles.smallButtonImage} />
      <Text style={styles.smallButtonText}>{message}</Text>
    </TouchableOpacity>
  );
}
