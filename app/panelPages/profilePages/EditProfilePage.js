import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import styles from './styles';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {getData} from './ProfilePage';
import FaraKhuButton from '../Component/FaraKhuButton';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';

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
  let id;
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
      if (data.favourites.length === 0) {
        console.log('hello');
        addFavourite(favourites).then(idFav => {
          data.favourites = [{favouriteId: idFav, description: favourites}];
        });
      } else {
        data.favourites[0].description = favourites;
        id = data.favourites[0].favouriteId;
      }
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.setItem('userData', JSON.stringify(data));
      console.log(data);
      getData().then(asd => {
        console.log(asd);
      });
    });
  } catch (err) {
    console.log(err);
  }
  try {
    await fetch('https://api.farakhu.markop.ir/api/User/UpdateFavourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Description: favourites,
        FavouriteId: id,
      }),
    });
  } catch (e) {
    console.log(e);
  }
}

export default function EditProfilePage({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getId, setId] = useState('');
  const [getFavourite, setFavourite] = useState('');
  const [checked, setChecked] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  useEffect(() => {
    getData().then(data => {
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setId(data.id);
      console.log(data);
      setFavourite(data.favourites[0].description);
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
          onPress={() => setAvatarModalOpen(true)}
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
          {/* Choose Avatar Modal */}
          <Modal
            visible={avatarModalOpen}
            transparent={true}
            animationType="fade">
            <Pressable
              onPress={() => setAvatarModalOpen(false)}
              style={[
                styles.mainViewOfAvatarModal,
                {
                  backgroundColor:
                    window.Theme === 'dark'
                      ? 'rgba(41, 52, 82,0.6)'
                      : 'rgba(41, 52, 82,0.5)',
                },
              ]}>
              <View
                style={[
                  styles.avatarModal,
                  {
                    backgroundColor:
                      window.Theme === 'dark'
                        ? 'rgb(34,40,49)'
                        : 'rgb(255,255,255)',
                  },
                ]}>
                <View style={styles.avatarModalTitleContainer}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Samim',
                      color: Colors.accent(),
                    }}>
                    انتخاب آواتار :
                  </Text>
                  <Image
                    style={{width: '8%', aspectRatio: 1}}
                    source={require('../../resources/photos/PanelPages/closeModal.png')}
                  />
                </View>
                <View style={styles.avatarModalPhotos}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{width: '50%', aspectRatio: 1}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={require('../../resources/photos/PanelPages/smiley.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{width: '50%', aspectRatio: 1}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={require('../../resources/photos/PanelPages/sad.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{width: '50%', aspectRatio: 1}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={require('../../resources/photos/PanelPages/poker.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{width: '50%', aspectRatio: 1}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={require('../../resources/photos/PanelPages/blink.png')}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop: 10}}>
                  <Text
                    style={{
                      fontSize: 19,
                      fontFamily: 'Samim',
                      color: Colors.accent(),
                    }}>
                    انتخاب عکس دلخواه
                  </Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Modal>
          {/* End of Choose Avatar Modal */}
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
          setFavourite(data);
        }}
        topic={'علاقه مندی ها'}
        editable={true}
        textInputMessage={getFavourite}
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

async function addFavourite(description) {
  let id;
  try {
    fetch('https://api.farakhu.markop.ir/api/User/AddFavourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Description: description,
      }),
    }).then(async response => {
      let data = await response.json();
      id = data.favouriteId;
    });
  } catch (e) {
    console.log(e);
  }
  return id;
}
