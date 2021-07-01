import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function ProfileButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.profileStyle}
      onPress={() => {
        console.log(
          Dimensions.get('window').width / Dimensions.get('window').height,
        );
      }}>
      <View style={styles.profileContainerStyle}>
        <Image
          resizeMode={'stretch'}
          source={require('../../resources/photos/PanelPages/profileLogo.png')}
          style={styles.profileImageStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
