import React, {useState} from 'react';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import styles from './styles';
import {AlertIOS, Image, Platform, ToastAndroid, View} from 'react-native';
import FaraKhuText from './Component/FaraKhuText';

export default function SecondSignUpPage(props) {
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getID, setID] = useState('');

  async function signUpFunction() {
    try {
      const data = await fetch(
        'https://api.farakhu.markop.ir/api/Account/SignUp',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            FirstName: getFirstName,
            LastName: getLastName,
            Email: props.route.params.email,
            UserType: 2,
            Id: getID,
            Password: props.route.params.password,
          }),
        },
      );
      return data.status;
    } catch (err) {
      return err;
    }
  }

  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.pop(1);
        }}
      />
      <Image
        source={require('../resources/photos/progressBarSecond.png')}
        style={styles.progressBar}
      />
      <FaraKhuTextInput
        sizeOfIcon={40}
        iconType={'ionicon'}
        placeholderText={'نام'}
        marginBottom={'1.5%'}
        marginTop={'15%'}
        height={'7%'}
        marginRight={'2%'}
        isPasswordInput={false}
        icon={'md-person-sharp'}
        onChangeText={firstName => {
          setFirstName(firstName);
        }}
      />
      <FaraKhuTextInput
        sizeOfIcon={40}
        iconType={'ionicon'}
        placeholderText={'نام خانوادگی'}
        marginBottom={'1.5%'}
        marginTop={'2%'}
        marginRight={'2%'}
        height={'7%'}
        isPasswordInput={false}
        icon={'md-person-sharp'}
        onChangeText={lastName => {
          setLastName(lastName);
        }}
      />
      <FaraKhuTextInput
        sizeOfIcon={40}
        iconType={'antdesign'}
        placeholderText={'شماره دانشجویی/استادی'}
        marginBottom={'1.5%'}
        marginTop={'2%'}
        marginRight={'2%'}
        height={'7%'}
        keyboardType={'numeric'}
        isPasswordInput={false}
        icon={'idcard'}
        onChangeText={id => {
          setID(id);
        }}
      />

      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'5%'}
          opacity={1}
          textOpacity={0.75}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'تایید'}
          fontSize={20}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            if (
              getFirstName.trim() === '' ||
              getLastName.trim() === '' ||
              getID.trim() === ''
            ) {
              if (Platform.OS === 'android') {
                ToastAndroid.show(
                  'تمامی فیلد ها باید کامل شوند',
                  ToastAndroid.TOP,
                );
              } else {
                AlertIOS.alert('تمامی فیلد ها باید کامل شوند');
              }
            } else {
              signUpFunction().then(response => {
                if (response === 200) {
                  props.navigation.push('VerificationCodePage', {
                    email: props.route.params.email,
                  });
                } else {
                  if (Platform.OS === 'android') {
                    ToastAndroid.show(
                      'اطلاعات کاربردی تکراری است',
                      ToastAndroid.TOP,
                    );
                  } else {
                    AlertIOS.alert('اطلاعات کاربردی تکراری است');
                  }
                }
              });
              // console.log(data);
            }
          }}
        />
      </View>
    </View>
  );
}
