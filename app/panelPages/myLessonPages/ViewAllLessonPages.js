import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import Colors from '../colors';
import styles from './styles';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Icon} from 'react-native-elements';

// getAllLesson()
//     .then(async data => {
//         await data.json().then(allLesson => {
//             allLesson.courses.courses.map(courseId => {
//                 console.log(courseId);
//             });
//         });
//     })
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
      await data.json().then(allLesson => {
        ans = allLesson.courses.courses;
      });
    });
  } catch (err) {
    console.log(err);
  }
  return ans;
}

export function ViewAllLesson() {
  getAllLesson().then(async data => {
    await data.json().then(allLesson => {
      allLesson.courses.courses.map(courseId => {
        console.log(courseId);
        return (
          <View>
            <Text> salam</Text>
          </View>
        );
      });
    });
  });
}

export function MyLessonButton({nameOfLesson}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          marginBottom: 10,
          marginTop: 10,
          width: 370,
          height: 70,
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

export function ViewLesson({lessonName}) {
  console.log('salam');
  return <MyLessonButton nameOfLesson={lessonName} />;
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
                nameOfLesson={data.courseTitle}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
