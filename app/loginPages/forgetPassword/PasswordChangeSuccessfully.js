import React from 'react';
import SuccessfullyPages from '../Component/SuccessfullyPages';
import styles from './styles';

export default function (props) {
  setTimeout(() => {
    props.navigation.navigate('LogInPage');
  }, 3000);
  return (
    <SuccessfullyPages
      message={'رمز عبور با موفقیت تغییر یافت'}
      imageAddress={require('../../resources/photos/keyLogos.png')}
      style={styles.keyLogosImage}
    />
  );
}
