import React from 'react';
import SuccessfullyPage from '../drawerPages/SuccessfullyPage';

export default function MakeAdvertisementSuccessfully({navigation}) {
  return (
    <>
      {window.Theme === 'dark' && (
        <SuccessfullyPage
          navigation={navigation}
          message={'آگهی شما با موفقیت ایجاد شد'}
          imageAddress={require('../../resources/photos/PanelPages/MakeAdvertisementSuccessfully-dark.png')}
        />
      )}
      {window.Theme === 'light' && (
        <SuccessfullyPage
          navigation={navigation}
          message={'آگهی شما با موفقیت ایجاد شد'}
          imageAddress={require('../../resources/photos/PanelPages/MakeAdvertisementSuccessfully-light.png')}
        />
      )}
    </>
  );
}
