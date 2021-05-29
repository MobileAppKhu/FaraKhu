import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import FaraKhuText from './FaraKhuText';
export default function FaraKhuButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.buttonLogIn,
        {
          marginTop: props.marginTop,
          opacity: props.opacity,
          backgroundColor: props.backgroundColor,
        },
      ]}
      onPress={props.function}>
      <FaraKhuText
        style={{
          color: props.color,
          fontSize: props.fontSize,
          opacity: props.textOpacity,
        }}>
        {props.buttonText}
      </FaraKhuText>
    </TouchableOpacity>
  );
}
