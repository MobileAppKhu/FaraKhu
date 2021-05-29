import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import BackButton from './Component/BackButton';
import FaraKhuText from './Component/FaraKhuText';

export default function (props) {
  const backToMainPage = () => {
    props.navigation.popToTop();
  };
  return (
    <View style={styles.background}>
      <BackButton function={backToMainPage} />
      <Image
        source={require('../resources/photos/signUp-gradient.png')}
        style={styles.signUp}
      />

      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'ایمیل'}
        marginBottom={'2%'}
        marginTop={'10%'}
        icon={'envelope'}
      />
      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'رمز'}
        marginBottom={'2%'}
        isPasswordInput={true}
        icon={'lock'}
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
        />
      </View>
    </View>
  );
}
