import React, {useState} from 'react';
import {
  AlertIOS,
  Image,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import FaraKhuTextInput from '../Component/FaraKhuTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import FaraKhuText from '../Component/FaraKhuText';

export default function (props) {
  const backToMainPage = () => {
    props.navigation.popToTop();
  };

  async function loginFunction() {
    try {
      return await fetch('https://api.farakhu.markop.ir/api/Account/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Logon: getEmail,
          Password: getPassword,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  return (
    <View style={styles.background}>
      <FaraKhuBackButton function={backToMainPage} />
      <Image
        source={require('../../resources/photos/LoginPages/signUp-gradient.png')}
        style={styles.signUp}
      />

      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'ایمیل'}
        marginBottom={'2%'}
        marginTop={'10%'}
        icon={'envelope'}
        onChangeText={data => {
          setEmail(data);
        }}
      />
      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'رمز'}
        marginBottom={'2%'}
        isPasswordInput={true}
        icon={'lock'}
        onChangeText={data => {
          setPassword(data);
        }}
      />
      <TouchableOpacity>
        <FaraKhuText
          style={styles.forgetPassword}
          function={() => {
            props.navigation.push('ForgetPasswordPage');
          }}>
          آیا رمز عبور خود را فراموش کردید؟
        </FaraKhuText>
      </TouchableOpacity>
      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'5%'}
          opacity={1}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'ورود'}
          fontSize={18}
          fontWeight={'bold'}
          color={'white'}
          pressAble={getPassword.trim() === '' || getEmail.trim() === ''}
          function={() => {
            if (getEmail.endsWith('@khu.ac.ir')) {
              loginFunction().then(async response => {
                const data = await response.json();
                if (response.status === 200) {
                  props.navigation.push('LoadingPage');
                } else {
                  if (Platform.OS === 'android') {
                    ToastAndroid.show(data.errors[0].message, ToastAndroid.TOP);
                  } else {
                    AlertIOS.alert(data.errors[0].message);
                  }
                }
              });
            } else {
              if (Platform.OS === 'android') {
                ToastAndroid.show('ایمیل نامعتبر است', ToastAndroid.TOP);
              } else {
                AlertIOS.alert('ایمیل نامعتبر است');
              }
            }
          }}
        />
      </View>
    </View>
  );
}
