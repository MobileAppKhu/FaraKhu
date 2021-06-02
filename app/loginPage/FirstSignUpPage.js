import React, {useState} from 'react';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import styles from './styles';
import {
  Image,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
  Text,
} from 'react-native';
import FaraKhuText from './Component/FaraKhuText';
import {Icon} from 'react-native-elements';

const IconReturn = props => {
  return (
    <View style={[styles.toolTipIcon, {marginTop: props.marginTop}]}>
      <Icon
        name="exclamation"
        type="evilicon"
        color="black"
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

export default function FirstSignUpPage(props) {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getRepeatPassword, setRepeatPassword] = useState('');
  const checkEmail = email => {
    return email.endsWith('@khu.ac.ir');
  };
  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.popToTop();
        }}
      />
      <Image
        source={require('../resources/photos/progressBarFirst.png')}
        style={styles.progressBar}
      />
      {/*<Image*/}
      {/*  source={require('../resources/photos/addUserLogo.png')}*/}
      {/*  style={styles.addUserLogo}*/}
      {/*/>*/}
      <FaraKhuText style={styles.whoAreYou}> کدام یک هستید ؟</FaraKhuText>
      <View style={[styles.logoSortView, {height: '13%'}]}>
        <View style={styles.studentLogo}>
          <Image
            source={require('../resources/photos/studentLogo.png')}
            style={styles.studentLogo}
          />
          <FaraKhuText style={styles.firstSignUpPageText}>
            {'     '}دانشجو
          </FaraKhuText>
        </View>
        <View style={styles.professorLogo}>
          <Image
            source={require('../resources/photos/professorLogo.png')}
            style={styles.professorLogo}
          />
          <FaraKhuText style={styles.firstSignUpPageText}>
            {'       '}استاد
          </FaraKhuText>
        </View>
      </View>
      <View style={styles.greenPartDownPage}>
        <View style={styles.toolTipIconView}>
          <FaraKhuTextInput
            sizeOfIcon={60}
            iconType={'evilicon'}
            placeholderText={'ایمیل'}
            marginBottom={'1.5%'}
            marginTop={'4%'}
            isPasswordInput={false}
            icon={'envelope'}
            onChangeText={data => {
              setEmail(data);
            }}
          />
          <IconReturn
            marginTop={'3%'}
            message={'پسوند ایمیل باید khu.ac.ir@ باشد'}
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
            onChangeText={data => {
              setPassword(data);
            }}
          />
          <IconReturn
            marginTop={'-1%'}
            message={'رمز عبور باید متشکل از حروف و اعداد انگلیسی باشد'}
          />
        </View>

        <FaraKhuTextInput
          sizeOfIcon={60}
          iconType={'evilicon'}
          placeholderText={' تایید رمز عبور'}
          marginBottom={'1%'}
          isPasswordInput={true}
          icon={'lock'}
          onChangeText={data => {
            setRepeatPassword(data);
          }}
        />
        {/*{!getEmail.endsWith('@khu.ac.ir') && (*/}
        {/*  <View>*/}
        {/*    <FaraKhuText style={{color: 'rgb(225,74,74)'}}>*/}
        {/*      پسوند ایمیل باید khu.ac.ir@*/}
        {/*    </FaraKhuText>*/}
        {/*  </View>*/}
        {/*)}*/}
        {getRepeatPassword !== getPassword && (
          <View>
            <FaraKhuText style={{color: 'rgb(225,74,74)'}}>
              رمز عبور و تکرار آن باید یکسان باشند
            </FaraKhuText>
          </View>
        )}
        <FaraKhuButton
          marginTop={'6%'}
          opacity={1}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'صفحه بعد'}
          fontSize={18}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            if (
              getPassword === getRepeatPassword &&
              getEmail.endsWith('@khu.ac.ir')
            ) {
              props.navigation.push('SecondSignUpPage', {
                email: getEmail,
                password: getPassword,
              });
            }
          }}
          pressAble={
            getEmail.trim() === '' ||
            getPassword.trim() === '' ||
            getRepeatPassword.trim() === ''
          }
        />
      </View>
    </View>
  );
}
