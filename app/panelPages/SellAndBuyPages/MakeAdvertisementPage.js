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
    return fetch('https://api.farakhu.markop.ir/api/File/Upload', {
      method: 'POST',
      body: createFormData(placardPhoto),
    })
      .then(response => response.json())
      .then(response => {
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
              {color: Colors.contactUsPageTextColor()},
            ]}>
            ایجاد آگهی
          </Text>
        </View>
        <View style={styles.dataInputsContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.textInputTitle}>
              <Text style={styles.boldTextOfInputTitle}>عنوان: </Text>
              <Text style={styles.regularTextOfInputTitle}>
                (محدودیت تعداد حرف ۴۰ عدد)
              </Text>
            </View>
            <View
              style={[
                styles.customTextInput,
                {
                  backgroundColor: Colors.makeAdvertisementTextInputBackColor(),
                },
              ]}>
              <TextInput
                onChangeText={data => setTitle(data)}
                maxLength={40}
                textAlign={'right'}
                style={[
                  {color: Colors.borderTopColor()},
                  styles.subjectTextInput,
                ]}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputTitle}>
              <Text style={styles.boldTextOfInputTitle}>توضیحات: </Text>
              <Text style={styles.regularTextOfInputTitle}>
                (راه ارتباطی ذکر شود)
              </Text>
            </View>
            <View
              style={[
                styles.customTextInput,
                {
                  backgroundColor: Colors.makeAdvertisementTextInputBackColor(),
                },
                styles.height150,
              ]}>
              <TextInput
                onChangeText={data => setDescription(data)}
                textAlign={'right'}
                multiline={true}
                style={[
                  {color: Colors.borderTopColor()},
                  styles.subjectTextInput,
                ]}
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
                  backgroundColor: Colors.makeAdvertisementTextInputBackColor(),
                },
              ]}>
              <TextInput
                onChangeText={data => setPrice(data)}
                keyboardType="numeric"
                textAlign={'right'}
                style={[
                  {color: Colors.borderTopColor()},
                  styles.subjectTextInput,
                ]}
              />
              <Text
                style={[styles.boldTextOfInputTitle, styles.priceTextInput]}>
                تومان
              </Text>
            </View>
          </View>
          <View style={styles.placardTypeAndImageContainer}>
            <View style={styles.placardType}>
              <Text style={[styles.boldTextOfInputTitle, styles.marginBottom8]}>
                نوع آگهی:
              </Text>
              <View style={styles.placardTypeOption}>
                <Text
                  style={[styles.regularTextOfInputTitle, styles.fontSize14]}>
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
                <Text
                  style={[styles.regularTextOfInputTitle, styles.fontSize14]}>
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
                      Colors.makeAdvertisementTextInputBackColor(),
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => handleChoosePhoto()}
                  activeOpacity={0.5}
                  style={styles.uploadPictureButton}>
                  <Image
                    style={styles.uploadPictureButtonImage}
                    resizeMode={'contain'}
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
          <View style={styles.marginTopForSubmitButton}>
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
                    createPlacardFunction(avatarId).then(async newResponse => {
                      if (newResponse.status === 200) {
                        navigation.navigate('MakeAdvertisementSuccessfully');
                      } else {
                        const data = await newResponse.json();
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
