import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Colors from '../../colors';
import {StyleSheet} from 'react-native';

export function EditButton({
  message,
  onPressFunction,
  textColor,
  borderWidth,
  borderRadius,
  bgColor,
  borderColor,
  width,
  height,
  fontSize,
}) {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      activeOpacity={0.6}
      style={[
        styles.editButton,
        {
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          width: width,
          height: height,
        },
      ]}>
      <Text style={{color: textColor, fontFamily: 'Samim', fontSize: fontSize}}>
        {message}
      </Text>
    </TouchableOpacity>
  );
}

export default function BookPlacardWithButton({
  title,
  price,
  imageAddress,
  onPress,
}) {
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
        <View style={styles.bookPlacardData}>
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
        <View style={styles.buttonContainer}>
          <EditButton
            message="ویرایش"
            textColor="white"
            bgColor="rgb(0,173,181)"
            borderRadius={20}
            borderWidth={1}
            borderColor="rgb(112,112,112)"
            fontSize={12}
            width={'40%'}
            height={'66%'}
          />
          <EditButton
            message="حذف"
            textColor={window.Theme === 'dark' ? 'white' : 'black'}
            bgColor={
              window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)'
            }
            borderRadius={20}
            borderWidth={1}
            borderColor={
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(112,112,112)'
            }
            fontSize={12}
            width={'40%'}
            height={'66%'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookPlacard: {
    borderWidth: 1,
    height: 180,
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    height: '25%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bookPlacardData: {
    height: '80%',
    flexDirection: 'row-reverse',
  },
  placardDescription: {
    flex: 1.5,
    marginTop: 10,
  },
  placardTitle: {
    fontFamily: 'Samim',
    fontSize: 16,
  },
  bookPriceConatiner: {
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  bookPrice: {
    fontFamily: 'Samim',
    fontSize: 12,
    color: 'rgb(0,173,181)',
    marginRight: 10,
  },
  placardImageConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
  },
  placardImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
