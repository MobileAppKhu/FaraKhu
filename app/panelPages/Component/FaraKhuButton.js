import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../colors';
import styles from './styles';

export default function FaraKhuButton({message, onPressFunction, pressAble}) {
  return (
    <TouchableOpacity
      disabled={pressAble}
      activeOpacity={0.8}
      style={styles.faraKhuButton}
      onPress={onPressFunction}>
      <Text style={styles.textOfFaraKhuButton}>{message}</Text>
    </TouchableOpacity>
  );
}
