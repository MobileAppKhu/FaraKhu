import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

export default function PersonalCalender({navigation}) {
  const [month] = useState([
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ]);
  const [year] = useState([
    '1400',
    '1401',
    '1402',
    '1403',
    '1404',
    '1405',
    '1406',
    '1407',
    '1408',
    '1409',
    '1410',
  ]);
  const [getMonth, setMonth] = useState(0);
  const [getYear, setYear] = useState(0);
  return (
    <View
      style={[styles.mainView, {backgroundColor: Colors.backgroundColor()}]}>
      <BackgroundImage
        source={require('../../resources/photos/PanelPages/topPartOfCalender.png')}
        resizeMode={'stretch'}
        style={styles.topPartImage}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
        <Text style={styles.todayText}>امروز</Text>
        <View style={styles.textOfTopPart}>
          <Text
            key={'month'}
            style={[
              styles.monthTextTopPart,
              {color: Colors.calendarTextColor()},
            ]}>
            خرداد
          </Text>
          <Text
            key={'year'}
            style={[
              styles.yearTextTopPart,
              {color: Colors.calendarTextColor()},
            ]}>
            ۱۴۰۰
          </Text>
        </View>
        <View
          style={[
            styles.dividerLineTopPart,
            {backgroundColor: Colors.calendarTextColor()},
          ]}
        />
        <Text
          key={'day'}
          style={[styles.dayTextTopPart, {color: Colors.calendarTextColor()}]}>
          ۲۰
        </Text>
      </BackgroundImage>
      <View style={styles.calenderView}>
        <View style={styles.pickersView}>
          <PickerGroup
            value={getMonth}
            month={month}
            onChangeFunction={index => {
              setMonth(index);
            }}
          />
          <PickerGroup
            month={year}
            value={getYear}
            onChangeFunction={index => {
              setYear(index);
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
        </View>
      </View>
      <BackgroundImage
        source={require('../../resources/photos/PanelPages/calenderBottomPartLight.png')}
        resizeMode={'contain'}
        style={styles.bottomPartImage}>
        <Text style={[styles.moreInfoText, {color: Colors.topColor()}]}>
          جهت دیدن رویداد ها روی تاریخ مورد نظر کلیک نمایید
        </Text>
        <CalenderButton
          onPressFunction={() => {
            console.log(1);
          }}
          name={'ایجاد رویداد جدید'}
        />
      </BackgroundImage>
    </View>
  );
}

function CalenderButton({name, onPressFunction}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPressFunction}
      style={[
        styles.calenderButton,
        {
          backgroundColor: Colors.topColor(),
          borderColor: Colors.contactUsPageTextColor(),
        },
      ]}>
      <Text style={styles.calenderButtonLabel}>{name}</Text>
    </TouchableOpacity>
  );
}

function PickerGroup({month, onChangeFunction, value}) {
  return (
    <View
      style={[
        styles.pickerStyle,
        {
          backgroundColor: Colors.bigButtonTextColor(),
          borderColor: Colors.topColor(),
        },
      ]}>
      <Picker
        mode={'dropdown'}
        dropdownIconColor={'grey'}
        selectedValue={value}
        onValueChange={onChangeFunction}>
        {month.map((data, index) => {
          return (
            <Picker.Item
              key={index}
              label={data}
              value={index + 1}
              style={styles.pickerItems}
            />
          );
        })}
      </Picker>
    </View>
  );
}

function ShowDay({dayName, numbers}) {
  return (
    <View style={{alignItems: 'center', marginLeft: '5%'}}>
      <Text style={{fontFamily: 'WasmFont', fontSize: 20}}>{dayName}</Text>
      {numbers.map(data => {
        return (
          <Text
            style={{
              marginTop: '10%',
              fontFamily: 'WasmFont',
              fontSize: 20,
              marginBottom: '10%',
            }}>
            {data}
          </Text>
        );
      })}
    </View>
  );
}
