import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../colors';

export default function FaraKhuTextInput({
  marginBottom,
  marginTop,
  height,
  placeholderText,
  onChangeText,
  isPasswordInput,
}) {
  const [hidePass, setHidePass] = useState(isPasswordInput);
  return (
    <View
      style={[
        styles.customTextInput,
        {
          backgroundColor: Colors.topColor(),
          marginBottom: marginBottom,
          marginTop: marginTop,
          height: height,
        },
      ]}>
      <View style={{width: '10%'}} />
      <TextInput
        placeholderTextColor={Colors.borderTopColor()}
        placeholder={placeholderText}
        style={{
          flex: 1,
          fontSize: 18,
          fontFamily: 'IranSans',
          color: Colors.borderTopColor(),
        }}
        textAlign={'right'}
        secureTextEntry={hidePass}
        onChangeText={onChangeText}
      />
      {isPasswordInput && (
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
