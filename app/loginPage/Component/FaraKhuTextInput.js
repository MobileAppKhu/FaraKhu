import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import styles from '../styles';
import {Icon} from 'react-native-elements';
import FaraKhuText from './FaraKhuText';

export default function FaraKhuTextInput(props) {
  const [hidePass, setHidePass] = useState(props.isPasswordInput);
  return (
    <View
      style={[
        styles.customTextInput,
        {
          marginBottom: props.marginBottom,
          marginTop: props.marginTop,
          height: props.height,
        },
      ]}>
      <Icon
        type={props.iconType}
        name={props.icon}
        size={props.sizeOfIcon}
        style={styles.iconFaraKhuTextInput}
        color={'rgb(0,173,181)'}
      />
      <View
        style={{
          width: StyleSheet.hairlineWidth,
          height: 35,
          backgroundColor: 'grey',
          borderRadius: 5,
          opacity: 0.8,
          margin: 2,
        }}
      />
      <TextInput
        placeholderTextColor="grey"
        placeholder={props.placeholderText}
        style={[FaraKhuText.getFontFamily, {flex: 1, fontSize: 20}]}
        textAlign={'right'}
        secureTextEntry={hidePass}
        onChangeText={props.onChangeText}
      />
      {props.isPasswordInput && (
        <View
          style={{
            marginLeft: 15,
          }}>
          <Icon
            name={hidePass ? 'eye-off-outline' : 'eye-outline'}
            size={17}
            color="grey"
            onPress={() => {
              setHidePass(!hidePass);
            }}
            type={'ionicon'}
          />
        </View>
      )}
    </View>
  );
}
