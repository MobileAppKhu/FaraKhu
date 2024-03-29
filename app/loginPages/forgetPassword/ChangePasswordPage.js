import React, {useState} from 'react';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import FaraKhuTextInput from '../Component/FaraKhuTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';
import styles from './styles';
import {AlertIOS, Image, Platform, ToastAndroid, View} from 'react-native';
import {Icon} from 'react-native-elements';
import FaraKhuText from '../Component/FaraKhuText';

const IconReturn = props => {
  return (
    <View style={[styles.toolTipIcon, {marginTop: props.marginTop}]}>
      <Icon
        name="exclamation"
        type="evilicon"
        color={'rgb(0,173,181)'}
        onPress={() => {
          if (Platform.OS === 'android') {
            ToastAndroid.show(props.message, ToastAndroid.TOP);
          } else {
            AlertIOS.alert(props.message);
          }
        }}
      />
    </View>
  );
};
export default function ChangePasswordPage(props) {
  const [getPassword, setPassword] = useState('');
  const [getRepeatPassword, setRepeatPassword] = useState('');

  async function changePassword() {
    try {
      return await fetch(
        'https://api.farakhu.markop.ir/api/Account/ResetPassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email: props.route.params.email,
            NewPassword: getPassword,
          }),
        },
      );
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
      <View style={styles.forgetPasswordImageContainer}>
        <Image
          source={require('../../resources/photos/LoginPages/lockLogo.png')}
          style={styles.lockLogoImage}
        />
      </View>
      <View style={styles.toolTipIconView}>
        <FaraKhuTextInput
          sizeOfIcon={60}
          iconType={'evilicon'}
          placeholderText={'رمز عبور'}
          marginBottom={'1.5%'}
          isPasswordInput={true}
          icon={'lock'}
          marginTop={'7%'}
          onChangeText={data => {
            setPassword(data);
          }}
        />
        <IconReturn
          marginTop={'5.5%'}
          message={'رمز عبور باید متشکل از حروف و اعداد انگلیسی باشد'}
        />
      </View>
      <FaraKhuTextInput
        sizeOfIcon={60}
        iconType={'evilicon'}
        placeholderText={'تایید رمز عبور'}
        marginBottom={'1.5%'}
        marginTop={'1%'}
        isPasswordInput={true}
        icon={'lock'}
        onChangeText={data => {
          setRepeatPassword(data);
        }}
      />
      {getPassword !== getRepeatPassword && (
        <View>
          <FaraKhuText style={{color: 'rgb(225,74,74)'}}>
            رمز عبور و تکرار آن باید یکسان باشند
          </FaraKhuText>
        </View>
      )}
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
          pressAble={getRepeatPassword !== getPassword}
          function={() => {
            if (getRepeatPassword === getPassword) {
              changePassword().then(async response => {
                if (response.status === 200) {
                  props.navigation.push('PasswordChangeSuccessfully');
                } else {
                  const data = await response.json();
                  if (Platform.OS === 'android') {
                    ToastAndroid.show(data.errors[0].message, ToastAndroid.TOP);
                  } else {
                    AlertIOS.alert(data.errors[0].message);
                  }
                }
              });
            }
          }}
        />
      </View>
    </View>
  );
}
