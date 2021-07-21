import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import Colors from '../colors';
import styles from './styles';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Icon} from 'react-native-elements';

export async function getAllLesson() {
  let ans;
  try {
    await fetch('https://api.farakhu.markop.ir/api/Course/ViewMyCourses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then(async data => {
      console.log(data);
      await data.json().then(allLesson => {
        ans = allLesson.courses.courses;
      });
    });
  } catch (err) {
    console.log(err);
  }
  return ans;
}

export function MyLessonButton({nameOfLesson, courseId, navigation}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.myButtonStyle,
        {
          backgroundColor: Colors.topColor(),
          borderColor: Colors.borderTopColor(),
        },
      ]}
      onPress={() => {
        navigation.push('LessonPage', {
          courseId: courseId,
        });
      }}>
      <BackgroundImage
        style={styles.myButtonImageStyle}
        resizeMode={'contain'}
        source={
          window.Theme === 'light'
            ? require('../../resources/photos/PanelPages/myLessonButtonImageLight.png')
            : require('../../resources/photos/PanelPages/myLessonButtonImageDark.png')
        }>
        <View style={styles.myButtonViewStyle}>
          <Icon
            name={'leftcircleo'}
            type={'antdesign'}
            color={Colors.accent()}
            size={30}
          />
          <Text
            style={[styles.viewAllLessonPageStyle, {color: Colors.accent()}]}>
            {nameOfLesson}
          </Text>
        </View>
      </BackgroundImage>
    </TouchableOpacity>
  );
}

export default function ViewAllLessonPages({navigation}) {
  const [getArray, setArray] = useState([]);
  useEffect(() => {
    getAllLesson().then(d => {
      setArray(d);
    });
  }, []);

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
        <View style={styles.detailViewStyle}>
          <Text
            style={[
              styles.textStyleOfTopTextOfMyLessonPage,
              {color: Colors.accent()},
            ]}>
            درس های من
          </Text>
          <ScrollView>
            {getArray.map(data => {
              return (
                <MyLessonButton
                  key={data.courseId}
                  courseId={data.courseId}
                  nameOfLesson={data.courseTitle}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
