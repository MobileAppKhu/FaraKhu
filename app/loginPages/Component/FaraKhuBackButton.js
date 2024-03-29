import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

export default function FaraKhuBackButton(props) {
  return (
    <View style={styles.BackButton}>
      <TouchableOpacity onPress={props.function} activeOpacity={0.7}>
        <Icon
          name={'chevron-thin-left'}
          size={40}
          color={props.color ? 'rgb(0,173,181)' : props.color}
          type={'entypo'}
        />
      </TouchableOpacity>
    </View>
  );
}
