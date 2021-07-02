import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function LoadingPage({navigation}) {
  const animated = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated.current, {
          toValue: 1,
          duration: 0,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(animated.current, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 10,
      },
    ).start();
    let isLogin;
    AsyncStorage.getItem('theme').then(async theme => {
      window.Theme = theme ?? 'dark';
      console.log(window.Theme);
      isLogin = await AsyncStorage.getItem('isLogin');
    });
    setTimeout(() => {
      if (isLogin === 'is') {
        navigation.replace('HomePage');
      } else {
        navigation.replace('MainPage');
      }
    }, 2000);
  }, []);
  const rotate = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });
  return (
    <View style={styles.loadingViewStyle}>
      <View style={styles.loadingIcon}>
        <Animated.View style={{transform: [{rotate: rotate}]}}>
          <Icon
            type={'evilicon'}
            name={'spinner-3'}
            size={150}
            color={'rgb(0,173,181)'}
          />
        </Animated.View>
      </View>
    </View>
  );
}
