import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import styles from './styles';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../colors';
import FaraKhuButton from '../../panelPages/Component/FaraKhuButton';
import {launchImageLibrary} from 'react-native-image-picker';

export default function MakeAdvertisementPage({navigation}) {
  const [checked, setChecked] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [placardType, setPlacardType] = useState('');
  const [price, setPrice] = useState('');
  const [placardPhoto, setPlacardPhoto] = useState(null);

  async function createPlacardFunction(avatarId) {
    console.log('cpf : ', avatarId);
    try {
      return await fetch(
        'https://api.farakhu.markop.ir/api/Offer/CreateOffer',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Title: title,
            Description: description,
            OfferType: placardType,
            Price: price,
            AvatarId: avatarId,
          }),
        },
      );
    } catch (err) {
      console.log(err);
    }
  }

  function uploadPhoto() {
    console.log('uploadPhoto run');
    return fetch('https://api.farakhu.markop.ir/api/File/Upload', {
      method: 'POST',
      body: createFormData(placardPhoto),
    })
      .then(response => response.json())
      .then(response => {
        console.log('upload successfull: ', response);
        setPlacardPhoto(null);
        return response.fileId;
      })
      .catch(err => {
        console.log('upload error', err);
      });
  }

  function handleChoosePhoto() {
    const options = {mediaType: 'photo'};
    launchImageLibrary(options, response => {
      if (response && !response.didCancel) {
        if (response.assets[0].uri) {
          setPlacardPhoto(response.assets[0]);
        }
      }
    });
  }

  function createFormData(photo) {
    const data = new FormData();
    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });
    return data;
  }

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
                onChangeText={data => setTitle(data)}
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
                onChangeText={data => setDescription(data)}
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
                onChangeText={data => setPrice(data)}
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
                  value={checked === 'first'}
                  onValueChange={() => {
                    setChecked('first');
                    setPlacardType(1);
                  }}
                />
              </View>
              <View style={styles.placardTypeOption}>
                <Text style={[styles.regularTextOfInputTitle, {fontSize: 14}]}>
                  فروش
                </Text>
                <CheckBox
                  tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
                  value={checked === 'second'}
                  onValueChange={() => {
                    setChecked('second');
                    setPlacardType(2);
                  }}
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
                  onPress={() => handleChoosePhoto()}
                  activeOpacity={0.5}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                  }}>
                  <Image
                    style={{
                      height: '80%',
                      aspectRatio: 1,
                      resizeMode: 'cover',
                    }}
                    source={
                      placardPhoto == null
                        ? require('../../resources/photos/PanelPages/plus-green.png')
                        : {uri: placardPhoto.uri}
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <FaraKhuButton
              message="تایید"
              onPressFunction={() => {
                if (
                  title !== '' &&
                  description !== '' &&
                  price !== '' &&
                  placardType !== '' &&
                  placardPhoto != null
                ) {
                  let avatarId;
                  uploadPhoto().then(response => {
                    avatarId = response;
                    console.log('avatarId: ', avatarId);
                    createPlacardFunction(avatarId).then(async response => {
                      if (response.status === 200) {
                        navigation.navigate('MakeAdvertisementSuccessfully');
                      } else {
                        const data = await response.json();
                        if (Platform.OS === 'android') {
                          ToastAndroid.show(
                            data.errors[0].message,
                            ToastAndroid.TOP,
                          );
                        } else {
                          AlertIOS.alert(data.errors[0].message);
                        }
                      }
                    });
                  });
                } else {
                  if (Platform.OS === 'android') {
                    ToastAndroid.show(
                      'گزینه های بالا نمیتوانند خالی باشند',
                      ToastAndroid.TOP,
                    );
                  } else {
                    AlertIOS.alert('گزینه های بالا نمیتوانند خالی باشند');
                  }
                }
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
