import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuButton from '../Component/FaraKhuButton';
import {Icon} from 'react-native-elements';
import ProfileButton from '../Component/ProfileButton';
import colors from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BookImage as AvatarPhoto} from '../SellAndBuyPages/Components/BookPlacard';

export async function getData() {
  return JSON.parse(await AsyncStorage.getItem('userData'));
}

export default function ProfilePage({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getName, setName] = useState('');
  const [getId, setId] = useState('');
  const [getFavourite, setFavourite] = useState('');
  const [avatarId, setAvatarId] = useState(null);
  useEffect(() => {
    getData().then(data => {
      console.log(data);
      setEmail(data.email);
      setName(data.firstName + ' ' + data.lastName);
      setId(data.id);
      setFavourite(
        data.favourites.length === 0 ? '' : data.favourites[0].description,
      );
      setAvatarId(data.avatarId);
    });
  }, []);
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
          {avatarId != null && (
            <AvatarPhoto avatarId={avatarId} style={styles.profileImageStyle} />
          )}
          {avatarId == null && (
            <Image
              style={styles.profileImageStyle}
              resizeMode={'stretch'}
              source={
                window.Theme === 'light'
                  ? require('../../resources/photos/PanelPages/profilePhotoLight.png')
                  : require('../../resources/photos/PanelPages/profilePhotoDark.png')
              }
            />
          )}
        </View>
      </View>
      <View style={{marginTop: '27%'}}>
        <FaraKhuButton
          pressAble={false}
          message={'ویرایش پروفایل'}
          onPressFunction={() => {
            navigation.push('EditProfilePage');
          }}
        />
      </View>
      <View style={styles.viewOfTexts}>
        <Text
          style={[
            {
              fontFamily: 'IranSans',
              fontSize: 20,
            },
            {color: colors.accent()},
          ]}>
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
      <View
        style={[styles.separatorLine, {backgroundColor: colors.accent()}]}
      />
      <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
        <Text style={styles.normalTextOfTopPart}>{getFavourite}</Text>
      </View>
      <View
        style={[
          styles.bottomPartOfProfilePage,
          {backgroundColor: colors.topColor()},
        ]}
      />
      <ProfileButton
        address={
          window.Theme === 'light'
            ? require('../../resources/photos/PanelPages/homeImageLight.png')
            : require('../../resources/photos/PanelPages/homeImageDark.png')
        }
        onPressFunction={() => {
          navigation.pop();
        }}
      />
    </View>
  );
}
