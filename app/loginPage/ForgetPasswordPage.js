import React, {useState} from 'react';
import {View, Image, ToastAndroid, Platform, AlertIOS} from 'react-native';
import styles from './styles';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import FaraKhuText from './Component/FaraKhuText';

export default function ForgetPasswordPage(props) {
  const [getEmail, setEmail] = useState('');
  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.pop();
        }}
      />
      <Image
        source={require('../resources/photos/sendEmailLogo.png')}
        style={styles.forgetPasswordImage}
      />
      <FaraKhuText
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'rgb(238,238,238)',
          opacity: 0.75,
          marginTop: '4.5%',
        }}>
        تغییر با استفاده از ایمیل
      </FaraKhuText>
      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'ایمیل'}
        marginBottom={'1.5%'}
        marginTop={'7%'}
        isPasswordInput={false}
        icon={'envelope'}
        onChangeText={data => {
          setEmail(data);
        }}
      />
      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'5%'}
          opacity={1}
          textOpacity={0.65}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'دریافت ایمیل تایید'}
          fontSize={20}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            if (getEmail.endsWith('@khu.ac.ir')) {
              props.navigation.push('VerificationCodePage', {
                mail: getEmail,
                isChangePasswordPage: true,
              });
            } else {
              if (Platform.OS === 'android') {
                ToastAndroid.show(
                  'پسوند ایمیل باید khu.ac.ir@ باشد',
                  ToastAndroid.TOP,
                );
              } else {
                AlertIOS.alert('پسوند ایمیل باید khu.ac.ir@ باشد');
              }
            }
          }}
          pressAble={getEmail.trim() === ''}
        />
      </View>
    </View>
  );
}
