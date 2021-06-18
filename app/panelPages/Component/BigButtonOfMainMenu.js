import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BigButtonOfMainMenu({message, imageAddress}) {
  return (
    <TouchableOpacity style={styles.bigButton} activeOpacity={0.8}>
      <Text style={styles.bigButtonText}>{message}</Text>
      <Image source={imageAddress} style={styles.bigButtonImage} />
    </TouchableOpacity>
  );
}
