import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function FaraKhuButton({
  message,
  onPressFunction,
  pressAble,
  changeColor,
}) {
  return (
    <TouchableOpacity
      disabled={pressAble}
      activeOpacity={0.8}
      style={[
        styles.faraKhuButton,
        {
          backgroundColor: changeColor
            ? Colors.topColor()
            : Colors.borderTopColor(),
        },
      ]}
      onPress={onPressFunction}>
      <Text style={styles.textOfFaraKhuButton}>{message}</Text>
    </TouchableOpacity>
  );
}
