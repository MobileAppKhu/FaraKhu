import React, {Component} from 'react';

import styles from './styles';
import {View, Animated} from 'react-native';

export default class FirstLoadingPage extends Component {
  constructor(props) {
    super(props);
    this.animatedOne = new Animated.Value(0);
    Animated.timing(this.animatedOne, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    this.animatedTwo = new Animated.Value(0);
    Animated.timing(this.animatedTwo, {
      delay: 750,
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const scaleSmaller = this.animatedOne.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.5],
    });
    const scaleBigger = this.animatedTwo.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    });
    const spinFirst = this.animatedOne.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    });
    const spinSecond = this.animatedTwo.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-90deg'],
    });
    setTimeout(() => {
      this.props.navigation.navigate('SecondLoadingPage');
    }, 2000);
    return (
      <View style={styles.loadingBackground}>
        <View style={styles.rectangleOfLoadingTop} />
        <Animated.Image
          source={require('../resources/photos/loadingImage.png')}
          style={[
            styles.firstLoadingImage,
            {
              transform: [
                {rotate: spinFirst, scale: scaleSmaller},
                {
                  rotate: spinSecond,
                  scale: scaleBigger,
                },
              ],
            },
          ]}
        />
        <View style={styles.rectangleOfLoadingBottom} />
      </View>
    );
  }
}
