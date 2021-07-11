import React from 'react';
import styles from './styles';
import Colors from '../colors';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import FaraKhuTextInput from '../../loginPages/Component/FaraKhuTextInput';

export default function SellAndBuyPage({navigation}) {
  return (
    <View
      style={[
        styles.mainProfileView,
        {backgroundColor: Colors.backgroundColor()},
      ]}>
      <View>
        <FaraKhuBackButton
          navigationFunction={() => {
            navigation.pop();
          }}
        />
      </View>
      {/* search Section */}
      <View style={styles.searchSection}>
        {/* search input */}
        <View
          style={[
            styles.searchTextInput,
            {
              backgroundColor:
                window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)',
            },
          ]}>
          {window.Theme === 'dark' && (
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{
                  width: 30,
                  resizeMode: 'contain',
                  marginRight: '3%',
                }}
                source={require('../../resources/photos/PanelPages/magnifying-glass-green.png')}
              />
            </TouchableOpacity>
          )}
          {window.Theme === 'light' && (
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{
                  width: 30,
                  resizeMode: 'contain',
                  marginRight: '3%',
                }}
                source={require('../../resources/photos/PanelPages/magnifying-glass-gray.png')}
              />
            </TouchableOpacity>
          )}
          <View style={styles.verticalSeparatorLine} />
          <TextInput
            placeholderTextColor={
              window.Theme === 'dark'
                ? 'rgba(0,173,181,0.5)'
                : 'rgba(112,112,112, 0.2)'
            }
            placeholder={'جست‌وجو در آگهی‌ها'}
            style={{
              flex: 1,
              fontSize: 14,
              color:
                window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(112,112,112)',
              fontFamily: 'Samim',
            }}
            textAlign={'right'}
          />
        </View>
        {/* end of search input */}

        {/* filter section */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.filter,
            {
              backgroundColor:
                window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)',
            },
          ]}>
          <Text
            style={{
              color:
                window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(112,112,112)',
            }}>
            فیلتر
          </Text>
          {window.Theme === 'light' && (
            <Image
              style={{
                aspectRatio: 1,
                marginRight: '10%',
                width: '28%',
              }}
              source={require('../../resources/photos/PanelPages/filter-gray.png')}
            />
          )}
          {window.Theme === 'dark' && (
            <Image
              style={{
                aspectRatio: 1,
                marginRight: '10%',
                width: '28%',
              }}
              source={require('../../resources/photos/PanelPages/filter-green.png')}
            />
          )}
        </TouchableOpacity>
        {/* end of filter section */}
      </View>
      {/* end of search section */}

      <View style={styles.separatorLine} />

      {/* Book Placard Section */}
      <View styles={styles.BookPlacardsSection}>
        <FlatList />
      </View>
      {/* End of Book Placard Section  */}
      {/* footer section */}
      <View
        style={[
          styles.footer,
          {
            backgroundColor: Colors.topColor(),
          },
        ]}>
        <View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.profileContainerStyle}>
              <Image />
            </View>
          </TouchableOpacity>
          <Text>آگهی‌ها</Text>
        </View>

        <View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.profileContainerStyle}>
              <Image />
            </View>
          </TouchableOpacity>
          <Text>ثبت آگهی</Text>
        </View>

        <View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.profileContainerStyle}>
              <Image />
            </View>
          </TouchableOpacity>
          <Text>آگهی‌های من</Text>
        </View>
      </View>
    </View>
  );
}
