import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {getData} from './ProfilePage';
import FaraKhuButton from '../Component/FaraKhuButton';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CustomTextInput({
  topic,
  textInputMessage,
  editable,
  onChangeText,
}) {
  return (
    <View style={styles.customTextInputViewStyle}>
      <Text style={styles.customTextInputTopic}>{topic}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={[
          styles.customTextInputTextInputStyle,
          {
            color: editable ? Colors.accent() : 'grey',
            textAlignVertical: 'bottom',
          },
        ]}
        value={textInputMessage}
        editable={editable}
      />
      <View style={styles.customTextInputLine} />
    </View>
  );
}

export async function editProfileFunction(firstName, lastName, favourites) {
  try {
    await fetch('https://api.farakhu.markop.ir/api/User/UpdateProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
      }),
    });
    getData().then(async data => {
      data.firstName = firstName;
      data.lastName = lastName;
      data.favourites = favourites;
      JSON.parse(await AsyncStorage.setItem('userData', JSON.stringify(data)));
    });
  } catch (err) {
    console.log(err);
  }
}

export default function EditProfilePage({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getId, setId] = useState('');
  const [getFavourite, setFavourite] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    getData().then(data => {
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setId(data.id);
      setFavourite(data.favourites);
    });
  }, []);

  return (
    <View
      style={[
        styles.mainProfileViewStyle,
        {backgroundColor: Colors.backgroundColor()},
      ]}>
      <View
        style={[
          styles.topPartOfEditProfile,
          {backgroundColor: Colors.topColor()},
        ]}>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </View>
      <View style={styles.editProfileImage}>
        <Image
          style={styles.profileImageStyle}
          resizeMode={'stretch'}
          source={
            window.Theme === 'light'
              ? require('../../resources/photos/PanelPages/profilePhotoLight.png')
              : require('../../resources/photos/PanelPages/profilePhotoDark.png')
          }
        />
        <TouchableOpacity
          style={styles.changeProfilePhotoStyle}
          activeOpacity={0.5}>
          <Image
            source={
              window.Theme === 'light'
                ? require('../../resources/photos/PanelPages/cameraLogoLight.png')
                : require('../../resources/photos/PanelPages/cameraLogoDark.png')
            }
            style={styles.profileImageStyle}
            resizeMode={'stretch'}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        onChangeText={data => {
          setFirstName(data);
        }}
        topic={'نام'}
        editable={true}
        textInputMessage={getFirstName}
      />
      <CustomTextInput
        onChangeText={data => {
          setLastName(data);
        }}
        topic={'نام خانوادگی'}
        editable={true}
        textInputMessage={getLastName}
      />
      <CustomTextInput
        onChangeText={data => {
          setEmail(data);
        }}
        topic={'ایمیل'}
        editable={false}
        textInputMessage={getEmail}
      />
      <CustomTextInput
        onChangeText={data => {
          setId(data);
        }}
        topic={'شماره دانشجویی/استادی'}
        editable={false}
        textInputMessage={getId}
      />
      <CustomTextInput
        onChangeText={data => {
          setFavourite(data.split(' '));
        }}
        topic={'علاقه مندی ها'}
        editable={true}
        textInputMessage={getFavourite.join(' ')}
      />
      <View style={styles.checkEmailShowView}>
        <Text
          style={[
            {fontSize: 18, fontFamily: 'Samim'},
            {color: Colors.accent()},
          ]}>
          نشان دادن ایمیل:
        </Text>
        <CheckBox
          tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
          value={checked}
          onValueChange={() => setChecked(checked === false)}
        />
      </View>
      <FaraKhuButton
        message={'ذخیره تغییرات'}
        onPressFunction={() => {
          editProfileFunction(getFirstName, getLastName, getFavourite).then(
            () => {
              navigation.pop();
            },
          );
        }}
      />
      <View
        style={[
          styles.bottomPartOfEditProfile,
          {backgroundColor: Colors.topColor()},
        ]}
      />
    </View>
  );
}
