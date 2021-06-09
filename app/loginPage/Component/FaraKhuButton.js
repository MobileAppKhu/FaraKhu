import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../styles';
import FaraKhuText, {getFontFamily} from './FaraKhuText';

export default function FaraKhuButton(props) {
  return (
    <TouchableOpacity
      disabled={props.pressAble}
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
          fontFamily: getFontFamily('normal'),
        }}>
        {props.buttonText}
      </FaraKhuText>
    </TouchableOpacity>
  );
}
