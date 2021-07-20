import React from 'react';
import {Image, Animated, View} from 'react-native';
import styles from './styles';
import {BackgroundImage} from 'react-native-elements/dist/config';
import Colors from '../colors';

export default function SuccessfullyPage({navigation, imageAddress, message}) {
  let animated = new Animated.Value(0);
  Animated.timing(animated, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  }).start();
  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 1],
  });
  setTimeout(() => {
    navigation.popToTop();
    navigation.replace('HomePage');
  }, 3000);
  return (
    <View>
      <BackgroundImage
        source={imageAddress}
        style={[
          styles.suggestionSuccessfullyImage,
          {backgroundColor: Colors.backgroundColor()},
        ]}>
        <Animated.Text
          style={[
            styles.animatedTextStyle,
            {
              transform: [{translateY: translateY}],
              color: Colors.accent(),
            },
          ]}>
          {message}
        </Animated.Text>
      </BackgroundImage>
    </View>
  );
}
