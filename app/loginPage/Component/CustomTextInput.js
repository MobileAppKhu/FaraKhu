import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import CustomText from './CustomText';
export default function CustomTextInput(props) {
  const [hidePass, setHidePass] = useState(true);
  return (
    <View
      style={[
        styles.customTextInput,
        {marginBottom: props.marginBottom, marginTop: props.marginTop},
      ]}>
      {/*<Image*/}
      {/*  source={props.require}*/}
      {/*  resizeMode={'cover'}*/}
      {/*  style={styles.iconImage}*/}
      {/*/>*/}
      <Icon
        name={props.icon}
        size={40}
        style={StyleSheet.create({
          marginRight: 10,
          fontWeight: 100,
        })}
        color={'rgb(0,173,181)'}
      />
      <TextInput
        placeholderTextColor="grey"
        placeholder={'   ' + props.string}
        style={[CustomText.getFontFamily, {flex: 1, fontSize: 20}]}
        textAlign={'right'}
        secureTextEntry={hidePass}
      />
      {/*
       */}
      {props.isPasswordInput && (
        <Icon
          style={StyleSheet.create({
            marginLeft: 15,
          })}
          name={hidePass ? 'eye-off' : 'eye'}
          size={17}
          color="grey"
          onPress={() => {
            setHidePass(!hidePass);
          }}
        />
      )}
    </View>
  );
}
