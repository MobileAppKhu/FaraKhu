import React from 'react';
import SuccessfullyPage from './SuccessfullyPage';

export default function PasswordChangedSuccessfullyWithOldPassword({
  navigation,
}) {
  return (
    <SuccessfullyPage
      navigation={navigation}
      message={'رمز عبور با موفقیت تغییر کرد'}
      imageAddress={require('../../resources/photos/PanelPages/passwordChangedSuccessfullyImageLight.png')}
    />
  );
}
