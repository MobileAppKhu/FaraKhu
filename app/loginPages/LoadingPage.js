import React, {useEffect, useRef} from 'react';
import {View, Animated, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 10,
      },
    ).start();
    let isLogin;
    AsyncStorage.getItem('theme').then(async theme => {
      window.theme = theme ?? 'dark';
      isLogin = await AsyncStorage.getItem('isLogin');
    });
    setTimeout(() => {
      if (isLogin === 'is') {
        navigation.replace('HomePage');
      } else {
        navigation.replace('MainPage');
      }
    }, 1000);
  }, []);
  const rotate = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#424242',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          marginTop: '-40%',
          marginBottom: '30%',
        }}>
        <Image
          resizeMode={'stretch'}
          style={{flex: 1, aspectRatio: 1}}
          source={require('../resources/photos/LoginPages/faraKhuLogoOfLoadingPage.png')}
        />
      </View>
      <View style={{width: '20%', flexDirection: 'row'}}>
        <Animated.Image
          source={require('../resources/photos/LoginPages/loading.png')}
          resizeMode={'stretch'}
          style={{flex: 1, aspectRatio: 1, transform: [{rotate: rotate}]}}
        />
      </View>
    </View>
  );
}
