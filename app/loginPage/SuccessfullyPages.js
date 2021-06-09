import React, {Component} from 'react';
import {Image, View, Animated} from 'react-native';
import styles from './styles';

export default class PasswordChangeSuccessfully extends Component {
  constructor(props) {
    super(props);
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
        <Image source={this.props.imageAddress} style={this.props.style} />
        <Animated.Text
          style={[styles.passwordChangeSuccessfullyText, {opacity, transform}]}>
          {this.props.message}
        </Animated.Text>
        <View style={styles.greenPartDownPage} />
      </View>
    );
  }
}
