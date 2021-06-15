import React from 'react';
import SuccessfullyPages from '../Component/SuccessfullyPages';
import styles from './styles';

export default function SignUpSuccessfully(props) {
  setTimeout(() => {
    props.navigation.navigate('LogInPage');
  }, 3000);
  return (
    <SuccessfullyPages
      message={'ثبت نام شما با موفقیت انجام شد'}
      imageAddress={require('../../resources/photos/signUpFinish.png')}
      style={styles.signUpSuccessfully}
    />
  );
}
