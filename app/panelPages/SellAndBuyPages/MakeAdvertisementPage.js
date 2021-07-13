import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../colors';
import FaraKhuButton from '../../panelPages/Component/FaraKhuButton';

export default function MakeAdvertisementPage({navigation}) {
  const [checked, setChecked] = useState('');
  return (
    <View
      style={[
        styles.backgroundStyleOfAdvertisementPage,
        {backgroundColor: Colors.topColor()},
      ]}>
      <View
        style={[
          styles.mainBackgroundOfAdvertisementPage,
          {backgroundColor: Colors.backgroundColor()},
        ]}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
        <View style={styles.titleOfMakeAdvertisementPage}>
          <Text
            style={[
              styles.titleOfMakeAdvertisementPageText,
              {color: window.Theme === 'dark' ? 'rgb(0,173,181)' : 'black'},
            ]}>
            ایجاد آگهی
          </Text>
        </View>
        <View style={styles.dataInputsContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.textInputTitle}>
              <Text style={styles.boldTextOfInputTitle}>عنوان: </Text>
              <Text style={styles.regularTextOfInputTitle}>
                (محدودیت تعداد حرف 40 عدد)
              </Text>
            </View>
            <View
              style={[
                styles.customTextInput,
                {
                  backgroundColor:
                    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'white',
                },
              ]}>
              <TextInput
                maxLength={40}
                textAlign={'right'}
                style={{
                  fontSize: 16,
                  fontFamily: 'Samim',
                  color: Colors.borderTopColor(),
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={[styles.textInputTitle, {}]}>
              <Text style={styles.boldTextOfInputTitle}>توضیحات: </Text>
              <Text style={styles.regularTextOfInputTitle}>
                (راه ارتباطی ذکر شود)
              </Text>
            </View>
            <View
              style={[
                styles.customTextInput,
                {
                  backgroundColor:
                    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'white',
                  height: 150,
                },
              ]}>
              <TextInput
                textAlign={'right'}
                multiline={true}
                style={{
                  fontSize: 16,
                  fontFamily: 'Samim',
                  color: Colors.borderTopColor(),
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputTitle}>
              <Text style={styles.boldTextOfInputTitle}>قیمت: </Text>
            </View>
            <View
              style={[
                styles.customTextInput,
                {
                  backgroundColor:
                    window.Theme === 'dark' ? 'rgb(34,40,49)' : 'white',
                },
              ]}>
              <TextInput
                keyboardType="numeric"
                textAlign={'right'}
                style={{
                  fontSize: 16,
                  fontFamily: 'Samim',
                  color: Colors.borderTopColor(),
                }}
              />
              <Text
                style={[
                  styles.boldTextOfInputTitle,
                  {
                    color: 'rgba(130,133,138,0.5)',
                    position: 'absolute',
                    top: 7,
                    left: 15,
                  },
                ]}>
                تومان
              </Text>
            </View>
          </View>
          <View style={styles.placardTypeAndImageContainer}>
            <View style={styles.placardType}>
              <Text style={[styles.boldTextOfInputTitle, {marginBottom: 8}]}>
                نوع آگهی:
              </Text>
              <View style={styles.placardTypeOption}>
                <Text style={[styles.regularTextOfInputTitle, {fontSize: 14}]}>
                  خرید(نیازمندی)
                </Text>
                <CheckBox
                  tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
                  value={checked === 'first' ? true : false}
                  onValueChange={() => setChecked('first')}
                />
              </View>
              <View style={styles.placardTypeOption}>
                <Text style={[styles.regularTextOfInputTitle, {fontSize: 14}]}>
                  فروش
                </Text>
                <CheckBox
                  tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
                  value={checked === 'second' ? true : false}
                  onValueChange={() => setChecked('second')}
                />
              </View>
            </View>
            <View style={styles.placardImageSection}>
              <Text style={styles.boldTextOfInputTitle}>عکس:</Text>
              <View
                style={[
                  styles.placardImageContainer,
                  {
                    backgroundColor:
                      window.Theme === 'dark' ? 'rgb(34,40,49)' : 'white',
                  },
                ]}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'center',
                    }}
                    source={require('../../resources/photos/PanelPages/plus-green.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <FaraKhuButton
              message="تایید"
              onPressFunction={() => {
                navigation.navigate('MakeAdvertisementSuccessfully');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}