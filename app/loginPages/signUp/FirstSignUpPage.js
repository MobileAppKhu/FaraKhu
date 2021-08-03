import React, {useState} from 'react';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import FaraKhuTextInput from '../Component/FaraKhuTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';
import styles from './styles';
import {
  Image,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
  TouchableOpacity,
} from 'react-native';
import FaraKhuText from '../Component/FaraKhuText';
import {Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export function IconReturn({marginTop, message, onPressCheck, color}) {
  return (
    <View style={[styles.toolTipIcon, {marginTop: marginTop}]}>
      <Icon
        name="exclamation"
        type="evilicon"
        color={color}
        onPress={() => {
          if (onPressCheck) {
            if (Platform.OS === 'android') {
              ToastAndroid.show(message, ToastAndroid.TOP);
            } else {
              AlertIOS.alert(message);
            }
          }
        }}
      />
    </View>
  );
}

export default function FirstSignUpPage(props) {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getRepeatPassword, setRepeatPassword] = useState('');
  const [emailOnBlur, setEmailOnBlur] = useState(false);
  const [passwordOnBlur, setPasswordOnBlur] = useState(false);
  const [studentLogo, setStudentLogo] = useState(false);
  const [professorLogo, setProfessorLogo] = useState(false);
  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.popToTop();
        }}
      />
      <View style={styles.progressBarContainer}>
        <Image
          resizeMode={'contain'}
          source={require('../../resources/photos/LoginPages/progressBarFirst.png')}
          style={styles.progressBar}
        />
      </View>
      <FaraKhuText style={styles.whoAreYou}> کدام یک هستید ؟</FaraKhuText>
      <View style={[styles.logoSortView, {height: '13%'}]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.studentLogoContainer,
            {height: studentLogo ? '110%' : '100%'},
          ]}
          onPress={() => {
            setStudentLogo(true);
            setProfessorLogo(false);
          }}>
          <Image
            resizeMode={'stretch'}
            source={require('../../resources/photos/LoginPages/studentLogo.png')}
            style={styles.studentLogo}
          />
          <FaraKhuText style={styles.firstSignUpPageText}>دانشجو</FaraKhuText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.professorLogoContainer,
            {height: professorLogo ? '110%' : '100%'},
          ]}
          onPress={() => {
            setProfessorLogo(true);
            setStudentLogo(false);
          }}>
          <Image
            resizeMode={'stretch'}
            source={require('../../resources/photos/LoginPages/professorLogo.png')}
            style={styles.professorLogo}
          />
          <FaraKhuText style={styles.firstSignUpPageText}>استاد</FaraKhuText>
        </TouchableOpacity>
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
            onBlur={() => {
              setEmailOnBlur(true);
            }}
          />
          <IconReturn
            marginTop={'3%'}
            message={'پسوند ایمیل باید khu.ac.ir@ باشد'}
            color={'black'}
            onPressCheck={true}
          />
        </View>
        {emailOnBlur && !getEmail.endsWith('@khu.ac.ir') && (
          <View>
            <FaraKhuText style={{color: 'rgb(225,74,74)'}}>
              پسوند ایمیل باید khu.ac.ir@
            </FaraKhuText>
          </View>
        )}
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
            message={'طول رمز عبور باید بیشتر از 6 باشد'}
            color={'black'}
            onPressCheck={true}
          />
        </View>
        <View style={styles.toolTipIconView}>
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
            onBlur={() => {
              setPasswordOnBlur(true);
            }}
          />
          <IconReturn
            marginTop={'-1%'}
            color={styles.greenPartDownPage.backgroundColor}
            onPressCheck={false}
          />
        </View>

        {passwordOnBlur && getRepeatPassword !== getPassword && (
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
                userType: studentLogo ? 1 : 2,
              });
            }
          }}
          pressAble={
            getEmail.trim() === '' ||
            getPassword.trim() === '' ||
            getRepeatPassword.trim() === '' ||
            !(professorLogo || studentLogo)
          }
        />
      </View>
    </View>
  );
}
