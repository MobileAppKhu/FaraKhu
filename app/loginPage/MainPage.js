import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import CustomButton from './Component/CustomButton';
import CustomText from './Component/CustomText';

export default function (props) {
  const logInButton = () => {
    props.navigation.push('LogIn');
  };
  return (
    <View style={styles.background}>
      <View style={styles.textCenterView}>
        <Image
          source={require('../resources/farakhuLogo.png')}
          style={styles.image}
        />
        <CustomText
          style={[
            styles.textCenter,
            {opacity: 0.8, fontSize: 16, marginTop: 50},
          ]}>
          اپلیکیشن
        </CustomText>
        <CustomText style={[styles.textCenter, {opacity: 0.9, fontSize: 20}]}>
          دانشگاه
        </CustomText>
        <CustomText style={[styles.textCenter, {fontSize: 24}]}>
          خوارزمی
        </CustomText>
      </View>
      <View style={styles.greenPartDownPage}>
        <CustomButton
          marginTop={'15%'}
          string={'ورود'}
          color={'white'}
          opacity={1}
          fontSize={16}
          function={logInButton}
          backgroundColor={'rgb(57,62,70)'}
        />
        <CustomButton
          marginTop={'1%'}
          string={'ثبت نام'}
          color={'black'}
          opacity={1}
          fontSize={16}
          function={logInButton}
        />
      </View>
    </View>
  );
}
