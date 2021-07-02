import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuButton from '../Component/FaraKhuButton';
import {Icon} from 'react-native-elements';
import ProfileButton from '../Component/ProfileButton';
import colors from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData() {
  return JSON.parse(await AsyncStorage.getItem('userData'));
}

export default function ProfilePage({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getName, setName] = useState('');
  const [getId, setId] = useState('');
  getData().then(data => {
    setEmail(data.email);
    setName(data.firstName + ' ' + data.lastName);
    setId(data.id);
  });
  //console.log(data);
  return (
    <View
      style={[
        styles.mainProfileViewStyle,
        {
          backgroundColor: colors.backgroundColor(),
        },
      ]}>
      <View
        style={[
          styles.topRectangle,
          {
            backgroundColor: colors.topColor(),
          },
        ]}>
        <View style={styles.textViewStyle}>
          <Text
            style={[
              styles.boldTextOfTopPart,
              {color: colors.bigButtonTextColor()},
            ]}>
            {getName}
          </Text>
          <Text
            style={[
              styles.normalTextOfTopPart,
              {color: colors.bigButtonTextColor()},
            ]}>
            {getEmail}
          </Text>

          <Text
            style={[
              styles.normalTextOfTopPart,
              {color: colors.bigButtonTextColor()},
            ]}>
            {getId}
          </Text>
        </View>
        <View style={styles.profileViewStyle}>
          <Image
            style={styles.profileImageStyle}
            resizeMode={'stretch'}
            source={require('../../resources/photos/PanelPages/profilePhotoLight.png')}
          />
        </View>
      </View>
      <View style={{marginTop: '27%'}}>
        <FaraKhuButton pressAble={false} message={'ویرایش پروفایل'} />
      </View>
      <View style={styles.viewOfTexts}>
        <Text
          style={{
            fontFamily: 'IranSans',
            fontSize: 20,
            color: colors.textHolderColor(),
          }}>
          علاقه مندی ها
        </Text>
        <Icon
          name={'hearto'}
          type={'antdesign'}
          size={30}
          color={'grey'}
          style={{marginRight: '5%'}}
        />
      </View>
      <View style={styles.separatorLine} />
      <View
        style={[
          styles.bottomPartOfProfilePage,
          {backgroundColor: colors.topColor()},
        ]}
      />
      <ProfileButton
        address={require('../../resources/photos/PanelPages/homeImage.png')}
        onPressFunction={() => {
          navigation.pop();
        }}
      />
    </View>
  );
}
