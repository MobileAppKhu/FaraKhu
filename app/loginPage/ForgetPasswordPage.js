import React, {useState} from 'react';
import {
  View,
  Image,
  ToastAndroid,
  Platform,
  AlertIOS,
  Text,
} from 'react-native';
import styles from './styles';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import FaraKhuText from './Component/FaraKhuText';

export default function ForgetPasswordPage(props) {
  const [getEmail, setEmail] = useState('');
  const sendMessage = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.TOP);
    } else {
      AlertIOS.alert(message);
    }
  };

  async function forgetPassword() {
    try {
      const data = await fetch(
        'https://api.farakhu.markop.ir/api/Account/ForgetPassword',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email: getEmail,
          }),
        },
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }

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
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}>
        Hello World
      </Text>
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
              forgetPassword().then(response => {
                if (response.status === 200) {
                  props.navigation.push('VerificationCodePage', {
                    email: getEmail,
                    isChangePasswordPage: true,
                  });
                } else {
                  sendMessage('ایمیل یافت نشد');
                }
              });
            } else {
              sendMessage('پسوند ایمیل باید khu.ac.ir@ باشد');
            }
          }}
          pressAble={getEmail.trim() === ''}
        />
      </View>
    </View>
  );
}
