import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

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

        <View
          style={{
            marginLeft: '-63%',
            flexDirection: 'row',
            alignItems: 'center',
            height: '40%',
          }}>
          <View style={{marginRight: '20%'}}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'IRANSans-Regular',
                fontSize: RFValue(36, 812),
              }}>
              ۲۰
            </Text>
          </View>
          <View
            style={[
              styles.dividerLineTopPart,
              {backgroundColor: Colors.calendarTextColor()},
            ]}
          />

          <View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'IRANSans-Regular',
                fontSize: RFValue(20, 812),
              }}>
              خرداد
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'IRANSans-Regular',
                fontSize: RFValue(20, 812),
              }}>
              ۱۴۰۰
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: '5%',
            alignItems: 'center',
            flex: 1,
            // backgroundColor: 'red',
            marginLeft: '-15%',
          }}>
          <Text
            style={{
              fontFamily: 'IRANSans-Regular',
              fontSize: RFValue(28, 812),
              fontWeight: '100',
            }}>
            امروز
          </Text>
        </View>
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
        <View
          style={{
            flexDirection: 'row-reverse',
            height: '100%',
            width: '80%',
            justifyContent: 'space-between',
          }}>
          <ShowDay dayName={'شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'یکشنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'دوشنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'سه شنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'چهارشنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'پنجشنبه'} numbers={['1', '2', '3', '4', '5']} />
          <ShowDay dayName={'جمعه'} numbers={['1', '2', '3', '4', '5']} />
        </View>
      </View>
      <BackgroundImage
        source={require('../../resources/photos/PanelPages/calenderBottomPartLight.png')}
        resizeMode={'stretch'}
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
              value={index}
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
    <View style={{alignItems: 'center', height: '100%'}}>
      <View style={{height: '10%'}}>
        <Text
          style={{fontFamily: 'IRANSans-Regular', fontSize: RFValue(12, 812)}}>
          {dayName}
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        {numbers.map((data, index) => {
          return (
            <Text
              adjustsFontSizeToFit
              key={index}
              style={{
                marginBottom: RFValue(12, 812),
                fontFamily: 'IRANSans-Regular',
                fontSize: RFValue(14, 812),
              }}>
              {data}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
