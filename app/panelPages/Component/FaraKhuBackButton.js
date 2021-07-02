import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

export default function FaraKhuBackButton({navigationFunction}) {
  return (
    <View style={styles.BackButton}>
      <TouchableOpacity onPress={navigationFunction} activeOpacity={0.7}>
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
