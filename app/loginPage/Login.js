import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomTextInput from '../loginPage/Component/CustomTextInput';
import CustomButton from './Component/CustomButton';
import BackButton from './Component/BackButton';
import CustomText from './Component/CustomText';

export default function (props) {
  const backToMainPage = () => {
    props.navigation.popToTop();
  };
  return (
    <View style={styles.background}>
      <BackButton function={backToMainPage} />
      <Image
        source={require('../resources/signUp-gradient.png')}
        style={[
          styles.image,
          {
            marginTop: '1%',
            width: '25.8%',
            height: '15%',
            resizeMode: 'stretch',
          },
        ]}
      />

      <CustomTextInput
        string={'ایمیل'}
        marginBottom={'1%'}
        marginTop={'10%'}
        require={require('../resources/emailIcon.png')}
        icon={'mail'}
      />
      <CustomTextInput
        string={'رمز'}
        marginBottom={'3%'}
        marginTop={'1%'}
        require={require('../resources/passwordIcon.png')}
        isPasswordInput={true}
        icon={'lock'}
      />
      <TouchableOpacity>
        <CustomText style={styles.forgetPassword}>
          آیا رمز عبور خود را فراموش کردید؟
        </CustomText>
      </TouchableOpacity>
      <View style={styles.greenPartDownPage}>
        <CustomButton
          marginTop={'5%'}
          opacity={1}
          backgroundColor={'rgb(57,62,70)'}
          string={'ورود'}
          fontSize={18}
          fontWeight={'bold'}
          color={'white'}
        />
      </View>
    </View>
  );
}
