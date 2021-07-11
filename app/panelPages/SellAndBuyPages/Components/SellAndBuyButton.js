import React from 'react';
import styles from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function SellAndBuyButton({
  imageAddress,
  bgColor,
  title,
  textColor,
  onPress,
  borderColor,
  width,
  height,
  bottom,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.button, {bottom: bottom}]}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
            width: width,
            height: height,
          },
        ]}>
        <Image style={styles.buttonImage} source={imageAddress} />
      </View>
      <Text
        style={{
          color: textColor,
          fontFamily: 'Samim',
          fontSize: 15,
          marginTop: 10,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
