import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../colors';

export default function FaraKhuBackButton({navigationFunction}) {
  return (
    <View style={styles.BackButton}>
      <TouchableOpacity onPress={navigationFunction} activeOpacity={0.7}>
        <Icon
          name={'chevron-thin-left'}
          size={40}
          color={Colors.borderTopColor()}
          type={'entypo'}
        />
      </TouchableOpacity>
    </View>
  );
}
