import React from 'react';
import styles from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function BookPlacard({title, price, imageAddress, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.bookPlacard,
          {
            backgroundColor:
              window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)',
            borderColor:
              window.Theme === 'dark'
                ? 'rgba(0,173,181,0.5)'
                : 'rgba(112,112,112,0.2)',
          },
        ]}>
        <View style={styles.placardDescription}>
          <Text
            style={{
              fontFamily: 'Samim',
              fontSize: 16,
              color: window.Theme === 'dark' ? 'white' : 'black',
            }}>
            {title}
          </Text>
          <View style={styles.bookPriceConatiner}>
            <Text
              style={{
                fontFamily: 'Samim',
                fontSize: 12,
                color: window.Theme === 'dark' ? 'white' : 'black',
              }}>
              قیمت:
            </Text>
            <Text style={styles.bookPrice}>{price} تومان</Text>
          </View>
        </View>
        <View
          style={[
            styles.placardImageConatiner,
            {
              borderColor:
                window.Theme === 'dark'
                  ? 'rgba(0,173,181,0.2)'
                  : 'rgba(112,112,112, 0.2)',
            },
          ]}>
          <Image style={styles.placardImage} source={imageAddress} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
