import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuBackButtonOfContactUs from '../Component/FaraKhuBackButtonOfContactUs';

export default function ContactUsPage({navigation}) {
  return (
    <View style={styles.contactUsStyle}>
      <View style={styles.rectangleOfTop}>
        <FaraKhuBackButtonOfContactUs
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </View>
      <View style={styles.square}>
        <Text style={styles.contactTextStyle}>ایمیل جهت ارتباط با ادمین</Text>
        <Text style={styles.contactEmailStyle}>contact@Farakhu.app</Text>
      </View>
      <View style={styles.containerStyleOfImage}>
        <Image
          resizeMode={'stretch'}
          source={require('../../resources/photos/PanelPages/emailLogo.png')}
          style={styles.styleOfImage}
        />
      </View>
      <View style={styles.rectangleOfBottom} />
    </View>
  );
}
