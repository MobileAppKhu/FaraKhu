import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuText from './Component/FaraKhuText';

export default function (props) {
  return (
    <View style={styles.background}>
      <View style={styles.textCenterView}>
        <Image
          source={require('../resources/photos/faraKhuLogo.png')}
          style={styles.faraKhuLogo}
        />
        <FaraKhuText
          style={[
            styles.textCenter,
            {opacity: 0.8, fontSize: 16, marginTop: 50},
          ]}>
          اپلیکیشن
        </FaraKhuText>
        <FaraKhuText style={[styles.textCenter, {opacity: 0.9, fontSize: 20}]}>
          دانشگاه
        </FaraKhuText>
        <FaraKhuText style={[styles.textCenter, {fontSize: 24}]}>
          خوارزمی
        </FaraKhuText>
      </View>
      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'15%'}
          buttonText={'ورود'}
          color={'white'}
          opacity={1}
          fontSize={16}
          function={() => {
            props.navigation.push('LogInPage');
          }}
          backgroundColor={'rgb(57,62,70)'}
        />
        <FaraKhuButton
          marginTop={'1%'}
          buttonText={'ثبت نام'}
          color={'black'}
          opacity={1}
          fontSize={16}
          function={() => {
            props.navigation.push('FirstSignUpPage');
          }}
        />
      </View>
    </View>
  );
}
