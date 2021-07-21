import React, {useEffect, useState} from 'react';
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
import FaraKhuButton from '../Component/FaraKhuButton';
import {downloadPhoto} from './Components/BookPlacard';

export default function EditAdvertisementPage({navigation, route}) {
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [placardType, setPlacardType] = useState(
    route.params.offerType === 'Buy' ? 1 : 2,
  );
  const [price, setPrice] = useState(route.params.price);
  const [placardPhoto, setPlacardPhoto] = useState(null);
  const [checked, setChecked] = useState(
    route.params.offerType === 'Buy' ? 'first' : 'second',
  );

  useEffect(() => {
    downloadPhoto(route.params.imageAddress).then(imagePath => {
      setPlacardPhoto(imagePath);
    });
  }, [route.params.imageAddress]);

  async function updatePlacardFunction() {
    try {
      return await fetch(
        'https://api.farakhu.markop.ir/api/Offer/UpdateOffer',
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
            offerId: route.params.offerId,
          }),
        },
      );
    } catch (err) {
      console.log(err);
    }
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
            ویرایش آگهی
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
                defaultValue={route.params.title}
                onChangeText={data => {
                  setTitle(data);
                }}
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
                defaultValue={route.params.description}
                onChangeText={data => {
                  setDescription(data);
                }}
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
                defaultValue={route.params.price}
                onChangeText={data => {
                  setPrice(data);
                }}
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
                      placardPhoto != null
                        ? {uri: placardPhoto}
                        : require('../../resources/photos/PanelPages/plus-green.png')
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
                  placardType !== ''
                ) {
                  updatePlacardFunction().then(async response => {
                    if (response.status === 200) {
                      if (Platform.OS === 'android') {
                        ToastAndroid.show(
                          'آگهی شما با موفقیت ویرایش شد',
                          ToastAndroid.TOP,
                        );
                      } else {
                        AlertIOS.alert('آگهی شما با موفقیت ویرایش شد');
                      }
                      navigation.pop();
                    } else {
                      const data = await response.json();
                      console.log(data);
                      if (Platform.OS === 'android') {
                        ToastAndroid.show(data.errors, ToastAndroid.TOP);
                      } else {
                        AlertIOS.alert(data.errors);
                      }
                    }
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
