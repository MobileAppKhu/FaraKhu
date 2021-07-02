import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

export default function FaraKhuBackButtonOfContactUs({
  navigationFunction,
  color,
}) {
  return (
    <View style={styles.faraKhuBackButton}>
      <TouchableOpacity onPress={navigationFunction} activeOpacity={0.8}>
        <Icon
          name={'chevron-thin-left'}
          size={40}
          color={'rgb(57,62,70)'}
          type={'entypo'}
        />
      </TouchableOpacity>
    </View>
  );
}
