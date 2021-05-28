import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButton(props) {
  return (
    <View style={styles.BackButton}>
      <TouchableOpacity onPress={props.function}>
        <Icon name={'chevron-left'} size={80} color={'rgb(0,173,181)'} />
      </TouchableOpacity>
    </View>
  );
}
