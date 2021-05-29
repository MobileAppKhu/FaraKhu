import React from 'react';
import BackButton from './Component/BackButton';
import FaraKhuTextInput from './Component/FaraKhuTextInput';
import FaraKhuButton from './Component/FaraKhuButton';
import FirstSignUpPage from './FirstSignUpPage';
import styles from './styles';
import {Image, View} from 'react-native';
import FaraKhuText from './Component/FaraKhuText';
import {Icon} from 'react-native-elements';

export default function SecondSignUp(props) {
  return (
    <View style={styles.background}>
      <BackButton
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
        isPasswordInput={false}
        icon={'md-person-sharp'}
      />
      <FaraKhuTextInput
        sizeOfIcon={40}
        iconType={'ionicon'}
        placeholderText={'نام خانوادگی'}
        marginBottom={'1.5%'}
        marginTop={'2%'}
        height={'7%'}
        isPasswordInput={false}
        icon={'md-person-sharp'}
      />
      <FaraKhuTextInput
        sizeOfIcon={40}
        iconType={'ionicon'}
        placeholderText={'شماره دانشجویی/استادی'}
        marginBottom={'1.5%'}
        marginTop={'2%'}
        height={'7%'}
        isPasswordInput={false}
        icon={'md-person-sharp'}
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
        />
      </View>
    </View>
  );
}
