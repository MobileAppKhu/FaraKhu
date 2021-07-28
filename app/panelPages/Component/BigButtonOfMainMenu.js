import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
      style={[
        styles.bigButton,
        {
          backgroundColor: Colors.topColor(),
          borderColor: Colors.homeButtonBorderColor(),
        },
      ]}
      activeOpacity={0.8}>
      <Text
        style={[styles.bigButtonText, {color: Colors.bigButtonTextColor()}]}>
        {message}
      </Text>
      <View style={styles.bigButtonImageView}>
        <Image
          source={imageAddress}
          style={styles.bigButtonImage}
          resizeMode={'stretch'}
        />
      </View>
    </TouchableOpacity>
  );
}
