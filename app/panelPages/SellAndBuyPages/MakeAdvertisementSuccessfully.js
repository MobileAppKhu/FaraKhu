import React from 'react';
import SuccessfullyPage from '../drawerPages/SuccessfullyPage';

export default function MakeAdvertisementSuccessfully({navigation}) {
  return (
    <SuccessfullyPage
      navigation={navigation}
      message={'آگهی شما با موفقیت ایجاد شد'}
      imageAddress={
        window.Theme === 'dark'
          ? require('../../resources/photos/PanelPages/MakeAdvertisementSuccessfully-dark.png')
          : require('../../resources/photos/PanelPages/MakeAdvertisementSuccessfully-light.png')
      }
    />
  );
}
