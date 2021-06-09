import React, {Component} from 'react';
import {Image, View, Animated} from 'react-native';
import styles from './styles';

export default class PasswordChangeSuccessfully extends Component {
  constructor() {
    super();
    this.animated = new Animated.Value(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const translateY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-500, 1],
    });
    const transform = [{translateY}];
    return (
      <View style={styles.background}>
        <Image
          source={require('../resources/photos/keyLogos.png')}
          style={styles.keyLogosImage}
        />
        <Animated.Text
          style={[styles.passwordChangeSuccessfullyText, {opacity, transform}]}>
          رمز عبور با موفقیت تغییر یافت
        </Animated.Text>
        <View style={styles.greenPartDownPage} />
      </View>
    );
  }
}
