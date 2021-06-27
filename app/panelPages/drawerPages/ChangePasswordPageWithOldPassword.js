import React, {useState} from 'react';
import {
  AlertIOS,
  Image,
  Platform,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {BackgroundImage} from 'react-native-elements/dist/config';
import FaraKhuTextInput from '../Component/FaraKhuTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';
import styles from './styles';
import {IconReturn} from '../../loginPages/signUp/FirstSignUpPage';

export default function ChangePasswordPageWithOldPassword(props) {
  const changePasswordFunction = async () => {
    try {
      return await fetch(
        'https://api.farakhu.markop.ir/api/Account/ChangePassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            OldPassword: getOldPassword,
            NewPassword: getNewPassword,
          }),
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  const [getOldPassword, setOldPassword] = useState('');
  const [getNewPassword, setNewPassword] = useState('');
  const [getNewPasswordRepeat, setNewPasswordRepeat] = useState('');
  return (
    <View style={styles.changePasswordStyle}>
      <BackgroundImage
        source={require('../../resources/photos/PanelPages/ChangePasswordPageWithOldPasswordImageLight.png')}
        style={styles.backgroundStyleOfChangePassword}>
        <View style={styles.topPartOfChangePassword}>
          <FaraKhuBackButton
            navigationFunction={() => {
              props.navigation.popToTop();
              props.navigation.replace('HomePage');
            }}
          />
        </View>
        <Image
          source={require('../../resources/photos/PanelPages/LockImageLight.png')}
          style={styles.imageStyleOfChangePassword}
        />
        <View style={{flexDirection: 'row-reverse'}}>
          <FaraKhuTextInput
            placeholderText={'رمز عبور فعلی'}
            marginTop={'10%'}
            isPasswordInput={true}
            marginBottom={'3%'}
            onChangeText={data => {
              setOldPassword(data);
            }}
          />
          <IconReturn color={'white'} onPressCheck={false} />
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <FaraKhuTextInput
            placeholderText={'رمز عبور جدید'}
            isPasswordInput={true}
            marginBottom={'3%'}
            onChangeText={data => {
              setNewPassword(data);
            }}
          />
          <IconReturn
            message={'طول رمز عبور باید بیشتر از 6 باشد'}
            marginTop={'3.5%'}
            onPressCheck={true}
            color={'black'}
          />
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <FaraKhuTextInput
            placeholderText={'تایید رمز عبور'}
            isPasswordInput={true}
            marginBottom={'2%'}
            onChangeText={data => {
              setNewPasswordRepeat(data);
            }}
          />
          <IconReturn color={'white'} onPressCheck={false} />
        </View>
        {getNewPassword !== getNewPasswordRepeat && (
          <View>
            <Text style={styles.warningTextStyle}>
              رمز عبور و تکرار ان یکسان نیستند
            </Text>
          </View>
        )}
        <FaraKhuButton
          message={'تایید'}
          pressAble={
            getNewPassword.trim() !== getNewPasswordRepeat.trim() ||
            getNewPassword.trim().length <= 6 ||
            getOldPassword.trim() === ''
          }
          onPressFunction={() => {
            changePasswordFunction().then(async response => {
              console.log(response);
              if (response.status === 200) {
                props.navigation.replace(
                  'PasswordChangedSuccessfullyWithOldPassword',
                );
              } else {
                const data = await response.json();
                if (Platform.OS === 'android') {
                  ToastAndroid.show(data.errors[0].message, ToastAndroid.TOP);
                } else {
                  AlertIOS.alert(data.errors[0].message);
                }
              }
            });
          }}
        />

        <View style={styles.bottomPartOfChangePassword} />
      </BackgroundImage>
    </View>
  );
}
