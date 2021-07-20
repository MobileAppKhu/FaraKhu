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
  bgWidth,
  bgHeight,
  bottom,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.button, {bottom: bottom}]}>
      <View
        style={[
          styles.imageContainerBackground,
          {
            width: bgWidth,
            height: bgHeight,
            backgroundColor:
              window.Theme === 'dark' ? 'rgb(57,62,70)' : 'rgb(238,238,238)',
            borderColor:
              window.Theme === 'dark' ? 'rgb(0,104,109)' : 'rgb(0, 156, 163)',
          },
        ]}>
        <View
          style={[
            styles.imageContainer,
            {
              backgroundColor: bgColor,
              borderColor: borderColor,
              width: width,
              aspectRatio: 1,
              bottom: '11%',
            },
          ]}>
          <Image style={styles.buttonImage} source={imageAddress} />
        </View>
      </View>
      <Text
        style={{
          color: textColor,
          fontFamily: 'Samim',
          fontSize: 15,
          marginTop: 3,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
