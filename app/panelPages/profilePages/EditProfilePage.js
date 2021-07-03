import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {getData} from './ProfilePage';
import FaraKhuButton from '../Component/FaraKhuButton';
import {RadioButton} from 'react-native-paper';

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
          {color: editable ? Colors.accent() : 'grey'},
        ]}
        defaultValue={textInputMessage}
        editable={editable}
      />
      <View style={styles.customTextInputLine} />
    </View>
  );
}

export default function EditProfilePage({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getId, setId] = useState('');
  const [getFavourite, setFavourite] = useState('');
  const [checked, setChecked] = useState('first');

  getData().then(data => {
    setEmail(data.email);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setId(data.id);
    setFavourite(data.favourites.length === 0 ? ' ' : data.favourites[0]);
  });
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
          source={require('../../resources/photos/PanelPages/profilePhotoLight.png')}
        />
        <TouchableOpacity
          style={styles.changeProfilePhotoStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../../resources/photos/PanelPages/cameraLogo.png')}
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
        topic={'علاقه مندی ها'}
        editable={true}
        textInputMessage={getFavourite}
      />
      <View style={styles.checkEmailShowView}>
        <Text style={{fontSize: 18, fontFamily: 'Samim'}}>
          نشان دادن ایمیل:
        </Text>
        <RadioButton
          color={'rgb(0,173,181)'}
          value="1"
          status={checked === '1' ? 'checked' : 'unchecked'}
          onPress={() => setChecked(checked === '1' ? '0' : '1')}
        />
      </View>
      <FaraKhuButton message={'ذخیره تغییرات'} />
      <View
        style={[
          styles.bottomPartOfEditProfile,
          {backgroundColor: Colors.topColor()},
        ]}
      />
    </View>
  );
}
