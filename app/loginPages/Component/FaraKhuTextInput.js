import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../../panelPages/colors';

export default function FaraKhuTextInput({
  marginTop,
  marginBottom,
  height,
  isPasswordInput,
  iconType,
  icon,
  sizeOfIcon,
  marginRight,
  placeholderText,
  onChangeText,
  keyboardType,
  onBlur,
}) {
  const [hidePass, setHidePass] = useState(isPasswordInput);
  const shadowOpt = {
    width: 160,
    height: 170,
    color: 'black',
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: {marginVertical: 5},
  };
  return (
    <View
      style={[
        styles.customTextInput,
        {
          marginBottom: marginBottom,
          marginTop: marginTop,
          height: height,
          backgroundColor: Colors.topColor(),
        },
      ]}>
      <Icon
        type={iconType}
        name={icon}
        size={sizeOfIcon}
        style={{marginRight: marginRight}}
        color={Colors.contactUsPageTextColor()}
      />
      <View style={styles.faraKhuTextInputStyle} />
      <TextInput
        placeholderTextColor="grey"
        placeholder={placeholderText}
        style={{
          flex: 1,
          fontSize: 20,
          color: 'rgb(238,238,238)',
          fontFamily: 'Samim',
        }}
        textAlign={'right'}
        secureTextEntry={hidePass}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={onBlur}
      />
      {isPasswordInput && (
        <View
          style={{
            marginLeft: 15,
          }}>
          <Icon
            name={hidePass ? 'eye-off-outline' : 'eye-outline'}
            size={17}
            color={'grey'}
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
