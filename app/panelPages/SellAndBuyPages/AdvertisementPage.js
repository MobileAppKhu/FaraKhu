import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Colors from '../colors';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {BookImage} from './Components/BookPlacard';

export default function AdvertisementPage({navigation, route}) {
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
        <TouchableOpacity activeOpacity={0.8} style={styles.bookImageContainer}>
          <BookImage
            avatarId={route.params.imageAddress}
            style={styles.bookImage}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.bookTitle,
            {color: window.Theme === 'dark' ? 'white' : 'black'},
          ]}>
          {route.params.title}
        </Text>
        <View
          style={[
            styles.separatorLine,
            {
              backgroundColor:
                window.Theme === 'dark'
                  ? 'rgba(0,173,181,0.5)'
                  : 'rgba(0,173,181, 0.6)',
              marginTop: 10,
              width: '75%',
            },
          ]}
        />
        <View style={styles.bookPriceContainer}>
          <Text
            style={{
              color:
                window.Theme === 'dark'
                  ? 'rgba(238,238,238, 0.5)'
                  : 'rgba(34,40,49, 0.5)',
              fontFamily: 'Samim',
              fontSize: 20,
            }}>
            قیمت پیشنهادی
          </Text>
          <Text
            style={{
              color: 'rgba(0,173,181, 1)',
              fontFamily: 'Samim',
              fontSize: 20,
              paddingTop: 7,
            }}>
            {route.params.price}
          </Text>
        </View>
        <View
          style={[
            styles.separatorLine,
            {
              backgroundColor:
                window.Theme === 'dark'
                  ? 'rgba(0,173,181,0.5)'
                  : 'rgba(0,173,181, 0.6)',
              marginTop: 10,
              width: '75%',
            },
          ]}
        />
        <View style={styles.bookDescription}>
          <Text
            style={{
              color:
                window.Theme === 'dark'
                  ? 'rgba(238,238,238, 0.5)'
                  : 'rgba(34,40,49, 0.5)',
              fontFamily: 'Samim',
              fontSize: 20,
            }}>
            توضیحات
          </Text>
          <ScrollView style={{height: '23%'}}>
            <Text
              style={{
                color: 'rgba(0,173,181, 1)',
                fontFamily: 'Samim',
                fontSize: 15,
                paddingTop: 7,
                textAlign: 'right',
              }}>
              {route.params.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
