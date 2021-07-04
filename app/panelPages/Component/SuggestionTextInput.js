import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function SuggestionTextInput({onChangeText}) {
  return (
    <View
      style={[
        styles.textInputStyle,
        {
          backgroundColor: Colors.backgroundColor(),
          borderColor: 'rgb(0,173,181)',
        },
      ]}>
      <TextInput
        textAlign={'right'}
        multiline={true}
        onChangeText={onChangeText}
        style={{color: Colors.borderTopColor()}}
      />
    </View>
  );
}
