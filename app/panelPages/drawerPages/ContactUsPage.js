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
      <View style={styles.square}>
        <Text
          style={[
            styles.contactTextStyle,
            {color: Colors.bigButtonTextColor()},
          ]}>
          ایمیل جهت ارتباط با ادمین
        </Text>
        <Text
          style={[
            styles.contactEmailStyle,
            {color: Colors.bigButtonTextColor()},
          ]}>
          contact@Farakhu.app
        </Text>
      </View>
      <View style={styles.containerStyleOfImage}>
        <Image
          resizeMode={'stretch'}
          source={require('../../resources/photos/PanelPages/emailLogo.png')}
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
