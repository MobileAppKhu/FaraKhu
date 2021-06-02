import React, {useState} from 'react';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import styles from './styles';
import {Image, View, ToastAndroid, Platform, AlertIOS} from 'react-native';

export default function SecondSignUpPage(props) {
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getID, setID] = useState('');
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
              props.navigation.push('VerificationCodePage', {
                mail: props.route.params.email,
              });
            }
          }}
        />
      </View>
    </View>
  );
}
