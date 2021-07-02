import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function SuggestionTextInput({onChangeText}) {
  return (
    <View
      style={[
        styles.textInputStyle,
        {backgroundColor: Colors.topColor(), borderColor: 'rgb(0,173,181)'},
      ]}>
      <TextInput
        multiline={true}
        onChangeText={onChangeText}
        style={{color: Colors.borderTopColor()}}
      />
    </View>
  );
}
