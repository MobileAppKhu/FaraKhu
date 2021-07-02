import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuText from './Component/FaraKhuText';

export default function MainPage({navigation}) {
  const animated = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animated.current, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const logInButton = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 1],
  });
  const signUpButton = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 1],
  });
  const logo = animated.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-250, 1],
  });

  return (
    <View style={styles.background}>
      <View style={styles.textCenterView}>
        <Animated.Image
          source={require('../resources/photos/LoginPages/faraKhuLogo.png')}
          style={[styles.faraKhuLogo, {transform: [{translateY: logo}]}]}
        />
        <FaraKhuText
          style={[
            styles.textCenter,
            {opacity: 0.8, fontSize: 16, marginTop: 50},
          ]}>
          اپلیکیشن
        </FaraKhuText>
        <FaraKhuText style={[styles.textCenter, {opacity: 0.9, fontSize: 20}]}>
          دانشگاه
        </FaraKhuText>
        <FaraKhuText style={[styles.textCenter, {fontSize: 24}]}>
          خوارزمی
        </FaraKhuText>
      </View>
      <View style={styles.greenPartDownPage}>
        <Animated.View style={{transform: [{translateX: logInButton}]}}>
          <FaraKhuButton
            marginTop={'15%'}
            buttonText={'ورود'}
            color={'white'}
            opacity={1}
            fontSize={20}
            textOpacity={0.7}
            function={() => {
              navigation.push('LogInPage');
            }}
            backgroundColor={'rgb(57,62,70)'}
          />
        </Animated.View>
        <Animated.View style={{transform: [{translateX: signUpButton}]}}>
          <FaraKhuButton
            marginTop={'1%'}
            buttonText={'ثبت نام'}
            color={'black'}
            opacity={1}
            textOpacity={0.7}
            fontSize={20}
            function={() => {
              navigation.push('FirstSignUpPage');
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
}
