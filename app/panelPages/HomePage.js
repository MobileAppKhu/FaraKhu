import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from '../panelPages/';
import Colors from '../resources/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage() {
  const [getStyle, setStyle] = useState();
  AsyncStorage.setItem('theme', 'dark');
  return (
    <View
      style={[
        {
          backgroundColor: Colors.primary(),
        },
        {
          width: 100,
        },
      ]}
    />
  );
}
