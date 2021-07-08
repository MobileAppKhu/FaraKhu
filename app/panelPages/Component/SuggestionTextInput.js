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
          backgroundColor: Colors.topColor(),
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
