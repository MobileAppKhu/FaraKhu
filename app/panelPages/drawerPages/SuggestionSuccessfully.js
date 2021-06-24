import React from 'react';
import {Image, Animated, View} from 'react-native';
import styles from './styles';

export default function SuggestionSuccessfully(props) {
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
    props.navigation.popToTop();
  }, 3000);
  return (
    <View>
      <Image
        source={require('../../resources/photos/PanelPages/suggestionSuccessfully.png')}
        style={styles.suggestionSuccessfullyImage}
      />
      <Animated.Text
        style={[
          styles.animatedTextStyle,
          {transform: [{translateY: translateY}]},
        ]}>
        ممنون از نظر شما
      </Animated.Text>
    </View>
  );
}
