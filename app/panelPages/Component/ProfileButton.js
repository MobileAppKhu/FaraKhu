import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ProfileButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.profileStyle}>
      <Image
        source={require('../../resources/photos/PanelPages/profileLogo.png')}
        style={styles.profileImageStyle}
      />
    </TouchableOpacity>
  );
}
