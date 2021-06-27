import React from 'react';
import SuccessfullyPage from './SuccessfullyPage';

export default function SuggestionSuccessfullyPage({navigation}) {
  return (
    <SuccessfullyPage
      navigation={navigation}
      message={'ممنون از نظر شما'}
      imageAddress={require('../../resources/photos/PanelPages/suggestionSuccessfully.png')}
    />
  );
}
