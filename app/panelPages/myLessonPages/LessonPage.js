import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {Icon} from 'react-native-elements';

export default function LessonPage({navigation, route}) {
  const [data, setData] = useState('');
  useEffect(() => {
    getLessonData(route.params.courseId).then(courseData => {
      setData(courseData.course);
    });
  }, []);
  return (
    <View style={[{backgroundColor: Colors.topColor()}, {flex: 1}]}>
      <View
        style={[
          {backgroundColor: Colors.backgroundColor()},
          {width: '100%', height: '100%', borderTopLeftRadius: 160},
        ]}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
        <View style={{alignItems: 'flex-end', marginTop: '7%', width: '90%'}}>
          <Text
            style={{fontSize: 20, color: Colors.accent(), fontFamily: 'Samim'}}>
            استاد درس :{data.length !== 0 ? data.instructor.firstName : ''}{' '}
            {data.length !== 0 ? data.instructor.lastName : ''}
          </Text>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: '3%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
              }}>
              <Icon
                size={55}
                color={'rgb(0,173,181)'}
                type={'evilicon'}
                name={'calendar'}
              />
              <Text
                style={{
                  color: 'rgb(0,173,181)',
                  fontFamily: 'Samim',
                  fontSize: 16,
                }}>
                شنبه - سه شنبه
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                marginLeft: '15%',
              }}>
              <Icon
                name={'clock'}
                type={'simple-line-icon'}
                size={35}
                color={'rgb(0,173,181)'}
              />
              <Text
                style={{
                  marginRight: '10%',
                  color: 'rgb(0,173,181)',
                  fontFamily: 'Samim',
                  fontSize: 20,
                }}>
                ۱۳:۳۰ - ۱۵:۰۰
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: '19%',
              marginTop: '7%',
            }}>
            <LessonPageButton
              onPressFunction={() => {
                console.log();
              }}
              label={'لیست دانشجویان'}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '12%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderWidth: 2,
          },
          {
            backgroundColor: Colors.topColor(),
            borderColor: Colors.borderTopColor(),
          },
        ]}
      />
    </View>
  );
}

async function getLessonData(courseId) {
  let ans;
  try {
    await fetch('https://api.farakhu.markop.ir/api/Course/ViewCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({CourseId: courseId}),
    }).then(async data => {
      ans = await data.json();
    });
  } catch (e) {
    console.log(e);
  }
  return ans;
}

function LessonPageButton({label, onPressFunction}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: '70%',
          height: '100%',
          borderRadius: 18,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '9%',
        },
        {
          borderColor: Colors.accent(),
          backgroundColor: Colors.topColor(),
        },
      ]}
      onPress={onPressFunction}>
      <Text
        style={[
          {fontSize: 21, fontFamily: 'Samim', opacity: 0.9},
          {color: Colors.bigButtonTextColor()},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
