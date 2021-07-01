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
    this.animatedThird = new Animated.Value(0);
    Animated.timing(this.animatedThird, {
      delay: 1500,
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    this.animatedFourth = new Animated.Value(0);
    Animated.timing(this.animatedFourth, {
      delay: 2250,
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const scaleSmallerFirst = this.animatedOne.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.5],
    });
    const scaleSmallerSecond = this.animatedThird.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.5],
    });
    const scaleBiggerFirst = this.animatedTwo.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    });
    const scaleBiggerSecond = this.animatedFourth.interpolate({
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
    const spinThird = this.animatedThird.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    });
    const spinFourth = this.animatedFourth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-90deg'],
    });
    setTimeout(() => {
      this.props.navigation.replace('SecondLoadingPage');
    }, 3000);
    return (
      <View style={styles.loadingBackground}>
        <View style={styles.rectangleOfLoadingTop} />
        <View style={styles.firstLoadingImageContainer}>
          <Animated.Image
            resizeMode={'stretch'}
            source={require('../../resources/photos/LoginPages/loadingImage.png')}
            style={[
              styles.firstLoadingImage,
              {
                transform: [
                  {rotate: spinFirst, scale: scaleSmallerFirst},
                  {
                    rotate: spinSecond,
                    scale: scaleBiggerFirst,
                  },
                  {rotate: spinThird, scale: scaleSmallerSecond},
                  {
                    rotate: spinFourth,
                    scale: scaleBiggerSecond,
                  },
                ],
              },
            ]}
          />
        </View>
        <View style={styles.rectangleOfLoadingBottom} />
      </View>
    );
  }
}
