import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

export default function SuggestionTextInput({onChangeText}) {
  return (
    <View style={styles.textInputStyle}>
      <TextInput multiline={true} onChangeText={onChangeText} />
    </View>
  );
}
