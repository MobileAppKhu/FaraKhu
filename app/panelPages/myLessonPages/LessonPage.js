import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';

export default function LessonPage({navigation, route}) {
  const [data, setData] = useState('');
  useEffect(() => {
    getLessonData(route.params.courseId).then(courseData => {
      setData(courseData.course);
    });
  }, []);
  console.log(data);
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
        <View style={{alignItems: 'flex-end', marginTop: '20%', width: '90%'}}>
          <Text
            style={{fontSize: 20, color: Colors.accent(), fontFamily: 'Samim'}}>
            استاد درس :{data.instructor.firstName} {data.instructor.lastName}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon />{' '}
          </View>
        </View>
      </View>
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
