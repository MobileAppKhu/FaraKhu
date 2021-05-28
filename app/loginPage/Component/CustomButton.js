import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import CustomText from './CustomText';
export default function CustomButton(props) {
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
      <CustomText
        style={{
          color: props.color,
          fontFamily: 'Samim Regular',
          fontSize: props.fontSize,
          opacity: props.opacity,
        }}>
        {props.string}
      </CustomText>
    </TouchableOpacity>
  );
}
