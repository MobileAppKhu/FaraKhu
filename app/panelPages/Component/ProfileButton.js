import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Colors from '../colors';

export default function ProfileButton({address, onPressFunction}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.profileStyle,
        {
          backgroundColor: Colors.topColor(),
          borderColor: Colors.backgroundColor(),
        },
      ]}
      onPress={onPressFunction}>
      <View style={styles.profileContainerStyle}>
        <Image
          resizeMode={'stretch'}
          source={address}
          style={styles.profileImageStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
