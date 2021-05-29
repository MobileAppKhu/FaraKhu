import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import BackButton from './Component/BackButton';
import FaraKhuText from './Component/FaraKhuText';

export default function ForgetPasswordPage(props) {
  return (
    <View style={styles.background}>
      <BackButton
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
        />
      </View>
    </View>
  );
}
