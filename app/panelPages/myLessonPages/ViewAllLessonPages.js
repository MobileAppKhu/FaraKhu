import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FaraKhuButton from '../Component/FaraKhuButton';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import Colors from '../colors';
import styles from './styles';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Icon} from 'react-native-elements';

export function MyLessonButton({nameOfLesson}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          width: '80%',
          height: '9%',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
        },
        {
          backgroundColor: Colors.topColor(),
          borderColor: Colors.borderTopColor(),
        },
      ]}>
      <BackgroundImage
        style={{
          flex: 1,
          width: '90%',
        }}
        resizeMode={'contain'}
        source={require('../../resources/photos/PanelPages/myLessonButtonImage.png')}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: '1%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon
            name={'leftcircleo'}
            type={'antdesign'}
            color={Colors.accent()}
            size={30}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'IranSans',
              fontWeight: 'bold',
              marginLeft: 'auto',
            }}>
            {nameOfLesson}
          </Text>
        </View>
      </BackgroundImage>
    </TouchableOpacity>
  );
}

export default function ViewAllLessonPages({navigation}) {
  return (
    <View
      style={[
        styles.backgroundStyleOfMyLessonPage,
        {backgroundColor: Colors.topColor()},
      ]}>
      <View
        style={[
          styles.mainBackgroundOfMyLessonPage,
          {backgroundColor: Colors.backgroundColor()},
        ]}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.popToTop();
          }}
        />
        <Text
          style={[
            styles.textStyleOfTopTextOfMyLessonPage,
            {color: Colors.accent()},
          ]}>
          درس های من
        </Text>
      </View>
    </View>
  );
}
