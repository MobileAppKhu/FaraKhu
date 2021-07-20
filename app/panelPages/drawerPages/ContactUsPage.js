import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuBackButtonOfContactUs from '../Component/FaraKhuBackButtonOfContactUs';
import Colors from '../colors';

export default function ContactUsPage({navigation}) {
  return (
    <View
      style={[
        styles.contactUsStyle,
        {backgroundColor: Colors.backgroundColor()},
      ]}>
      <View
        style={[
          styles.rectangleOfTop,
          {
            backgroundColor: Colors.topColor(),
            borderColor: Colors.borderTopColor(),
          },
        ]}>
        <FaraKhuBackButtonOfContactUs
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </View>
      <View
        style={[
          styles.square,
          {
            borderColor: Colors.topColor(),
          },
        ]}>
        <Text
          style={[
            styles.contactTextStyle,
            {color: Colors.contactUsPageTextColor()},
          ]}>
          ایمیل جهت ارتباط با ادمین
        </Text>
        <Text
          style={[
            styles.contactEmailStyle,
            {color: Colors.contactUsPageTextColor()},
          ]}>
          contact@Farakhu.app
        </Text>
      </View>
      <View style={styles.containerStyleOfImage}>
        <Image
          resizeMode={'stretch'}
          source={
            window.Theme === 'light'
              ? require('../../resources/photos/PanelPages/contactUsEmailLogoLight.png')
              : require('../../resources/photos/PanelPages/contactUsEmailLogoDark.png')
          }
          style={styles.styleOfImage}
        />
      </View>
      <View
        style={[
          styles.rectangleOfBottom,
          {
            backgroundColor: Colors.topColor(),
            borderColor: Colors.borderTopColor(),
          },
        ]}
      />
    </View>
  );
}
