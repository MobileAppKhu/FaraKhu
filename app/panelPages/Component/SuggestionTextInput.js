import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function SuggestionTextInput({onChangeText}) {
  let bgColor = window.Theme === 'dark' ? Colors.topColor() : 'white';
  return (
    <View
      style={[
        styles.textInputStyle,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <TextInput
        textAlign={'right'}
        multiline={true}
        onChangeText={onChangeText}
        style={{
          color: Colors.borderTopColor(),
          fontSize: 20,
          fontFamily: 'Samim',
        }}
      />
    </View>
  );
}
