import React from 'react';
import {View, Image, TextInput, Alert} from 'react-native';
import styles from './styles';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuText from './Component/FaraKhuText';
import FaraKhuBackButton from './Component/FaraKhuBackButton';

export default function VerificationCodePage(props) {
  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.pop();
        }}
      />
      <Image
        source={require('../resources/photos/emailSentLogo.png')}
        style={styles.verificationCodeImage}
      />
      <FaraKhuText
        style={{
          fontSize: 14,
          color: 'rgb(238,238,238)',
          marginTop: 25,
          marginBottom: 35,
        }}>
        کد تایید به {props.route.params.mail} ارسال گردید
      </FaraKhuText>
      <View style={{flexDirection: 'row'}}>
        <WhiteTextInput />
        <WhiteTextInput />
        <WhiteTextInput />
        <WhiteTextInput />
        <WhiteTextInput />
      </View>
      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'5%'}
          opacity={1}
          textOpacity={0.65}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'تایید'}
          fontSize={20}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            if (props.route.params.isChangePasswordPage) {
              props.navigation.push('ChangePasswordPage');
            } else {
              Alert.alert('وضعیت ثبت نام', 'ثبت نام با موفقیت انجام شد');
              props.navigation.popToTop();
              props.navigation.push('LogInPage');
            }
          }}
        />
      </View>
    </View>
  );
}

export function WhiteTextInput() {
  return (
    <View>
      <TextInput
        keyboardType={'numeric'}
        style={{
          height: 45,
          width: 45,
          backgroundColor: 'white',
          borderRadius: 5,
          margin: 3,
          borderWidth: 1,
          borderColor: 'rgb(0,173,181)',
        }}
        textAlign={'center'}
        maxLength={1}
      />
    </View>
  );
}
