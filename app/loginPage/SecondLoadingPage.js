import React, {Component} from 'react';

import styles from './styles';
import {View, Animated} from 'react-native';

export default class SecondLoadingPage extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const logo = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-650, 1],
    });
    return (
      <View style={styles.loadingBackground}>
        <View style={styles.rectangleOfLoadingTop} />
        <Animated.Image
          style={[styles.secondLoadingImage, {transform: [{translateY: logo}]}]}
          source={require('../resources/photos/faraKhuLogoOfLoadingPage.png')}
        />
        <View style={styles.rectangleOfLoadingBottom} />
      </View>
    );
  }
}
