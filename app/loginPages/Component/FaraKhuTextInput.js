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
}) {
  const [hidePass, setHidePass] = useState(isPasswordInput);
  return (
    <View
      style={[
        styles.customTextInput,
        {
          marginBottom: marginBottom,
          marginTop: marginTop,
          height: height,
        },
      ]}>
      <Icon
        type={iconType}
        name={icon}
        size={sizeOfIcon}
        style={{marginRight: marginRight}}
        color={Colors.topColor()}
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
