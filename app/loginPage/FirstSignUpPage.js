import React from 'react';
import BackButton from './Component/BackButton';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import SecondSignUpPage from './SecondSignUpPage';
import styles from './styles';
import {Image, View} from 'react-native';
import FaraKhuText from './Component/FaraKhuText';
import {Icon} from 'react-native-elements';

const IconReturn = props => {
  return (
    <View style={[styles.toolTipIcon, {marginTop: props.marginTop}]}>
      <Icon name="exclamation" type="evilicon" color="black" />
    </View>
  );
};

export default function FirstSignUpPage(props) {
  return (
    <View style={styles.background}>
      <BackButton
        function={() => {
          props.navigation.popToTop();
        }}
      />
      <Image
        source={require('../resources/photos/progressBarFirst.png')}
        style={styles.progressBar}
      />
      <Image
        source={require('../resources/photos/addUserLogo.png')}
        style={styles.addUserLogo}
      />
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
          />
          <IconReturn marginTop={'3%'} />
        </View>
        <View style={styles.toolTipIconView}>
          <FaraKhuTextInput
            sizeOfIcon={60}
            iconType={'evilicon'}
            placeholderText={'رمز عبور'}
            marginBottom={'1.5%'}
            isPasswordInput={true}
            icon={'lock'}
          />
          <IconReturn marginTop={'-1%'} />
        </View>

        <FaraKhuTextInput
          sizeOfIcon={60}
          iconType={'evilicon'}
          placeholderText={' تایید رمز عبور'}
          marginBottom={'1%'}
          isPasswordInput={true}
          icon={'lock'}
        />
        <FaraKhuButton
          marginTop={'6%'}
          opacity={1}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'صفحه بعد'}
          fontSize={18}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            props.navigation.push('SecondSignUpPage');
          }}
        />
      </View>
    </View>
  );
}
