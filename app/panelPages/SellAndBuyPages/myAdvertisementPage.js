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
  ScrollView,
} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import SellAndBuyButton from './Components/SellAndBuyButton';
import BookPlacardWithButton from './Components/BookPlacardWithButton';

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
          <View
            style={[
              styles.verticalSeparatorLine,
              {
                backgroundColor:
                  window.Theme === 'dark'
                    ? 'rgba(0,173,181,0.5)'
                    : 'rgba(112,112,112, 0.5)',
              },
            ]}
          />
          <TextInput
            placeholderTextColor={
              window.Theme === 'dark'
                ? 'rgba(0,173,181,0.2)'
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
              fontFamily: 'Samim',
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

      <View
        style={[
          styles.separatorLine,
          {
            backgroundColor:
              window.Theme === 'dark'
                ? 'rgba(0,173,181,0.5)'
                : 'rgba(112,112,112, 0.5)',
          },
        ]}
      />

      {/* Book Placard Section */}
      <ScrollView style={styles.bookPlacardsContainer}>
        <BookPlacardWithButton
          title="نیازمند به کتاب مبانی ریاضی نوشته لین و لین"
          price="20000"
          imageAddress={require('../../resources/photos/PanelPages/sampleBook.png')}
        />
        <BookPlacardWithButton
          title="نیازمند به کتاب مبانی ریاضی نوشته لین و لین"
          price="20000"
          imageAddress={require('../../resources/photos/PanelPages/sampleBook.png')}
        />
        <BookPlacardWithButton
          title="نیازمند به کتاب مبانی ریاضی نوشته لین و لین"
          price="20000"
          imageAddress={require('../../resources/photos/PanelPages/sampleBook.png')}
        />
        <BookPlacardWithButton
          title="نیازمند به کتاب مبانی ریاضی نوشته لین و لین"
          price="20000"
          imageAddress={require('../../resources/photos/PanelPages/sampleBook.png')}
        />
      </ScrollView>
      {/* End of Book Placard Section  */}

      {/* footer section */}
      <View
        style={[
          styles.footer,
          {
            backgroundColor: Colors.topColor(),
            borderTopColor:
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)',
          },
        ]}>
        <SellAndBuyButton
          onPress={() => {
            navigation.pop();
          }}
          title="آگهی‌ها"
          imageAddress={require('../../resources/photos/PanelPages/megaphon.png')}
          bgColor={Colors.backgroundColor()}
          textColor={window.Theme === 'dark' ? 'rgb(0,173,181)' : 'white'}
          borderColor={
            window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
          }
          width={82}
          height={78}
          bottom="8%"
        />
        {window.Theme === 'light' && (
          <SellAndBuyButton
            title="ثبت آگهی"
            imageAddress={require('../../resources/photos/PanelPages/plus-light.png')}
            bgColor={
              window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)'
            }
            textColor="white"
            borderColor={
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
            }
            width={90}
            height={87}
            bottom="10%"
          />
        )}
        {window.Theme === 'dark' && (
          <SellAndBuyButton
            title="ثبت آگهی"
            imageAddress={require('../../resources/photos/PanelPages/plus-dark.png')}
            bgColor="rgb(0,173,181)"
            textColor="rgb(0,173,181)"
            borderColor={
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
            }
            width={90}
            height={87}
            bottom="10%"
          />
        )}
        <SellAndBuyButton
          title="آگهی‌های من"
          imageAddress={require('../../resources/photos/PanelPages/user-red.png')}
          bgColor={window.Theme === 'dark' ? 'black' : 'rgb(34,40,49)'}
          textColor="red"
          borderColor="red"
          width={82}
          height={78}
          bottom="8%"
        />
      </View>
    </View>
  );
}
