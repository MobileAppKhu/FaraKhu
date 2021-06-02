import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import {Icon} from 'react-native-elements';

export default function FaraKhuBackButton(props) {
  return (
    <View style={styles.BackButton}>
      <TouchableOpacity onPress={props.function}>
        <Icon
          name={'chevron-thin-left'}
          size={50}
          color={'rgb(0,173,181)'}
          type={'entypo'}
        />
      </TouchableOpacity>
    </View>
  );
}
