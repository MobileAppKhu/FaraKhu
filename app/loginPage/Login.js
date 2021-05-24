import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function () {
  return (
    <View style={styles.background}>
      <View style={styles.textCenterView}>
        <Image
          source={require('../resources/farakhuLogo.png')}
          style={styles.image}
        />
        <Text
          style={[
            styles.textCenter,
            {opacity: 0.8, fontSize: 16, marginTop: 50},
          ]}>
          اپلیکیشن
        </Text>
        <Text style={[styles.textCenter, {opacity: 0.9, fontSize: 20}]}>
          دانشگاه
        </Text>
        <Text style={[styles.textCenter, {fontSize: 24}]}>خوارزمی</Text>
      </View>
      <View style={styles.greenPartDownPage}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttonLogIn, {marginTop: '17%', opacity: '0.9'}]}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Samim Regular',
              fontSize: 16,
            }}>
            ورود{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.buttonLogIn,
            {
              marginTop: '1%',
              backgroundColor: 'rgb(0,173,181)',
              opacity: '0.6',
            },
          ]}>
          <Text
            style={{color: 'black', fontFamily: 'Samim Regular', fontSize: 16}}>
            ثبت نام{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
