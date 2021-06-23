import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';

export default function ContactUs({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.rectangleOfTop}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </View>
      <View style={styles.square}>
        <Text
          style={{
            fontFamily: 'IranSans',
            fontSize: 17,
            color: 'rgb(57,62,70)',
          }}>
          ایمیل جهت ارتباط با ادمین
        </Text>
        <Text
          style={{
            fontFamily: 'Samim',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'rgb(34,40,49)',
          }}>
          contact@Farakhu.app
        </Text>
      </View>
      <Image
        source={require('../../resources/photos/PanelPages/emailLogo.png')}
        style={styles.styleOfImage}
      />
      <View style={styles.rectangleOfBottom} />
    </View>
  );
}
