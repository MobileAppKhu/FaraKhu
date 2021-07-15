import React, {useState, useEffect} from 'react';
import styles from './styles';
import Colors from '../colors';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import SellAndBuyButton from './Components/SellAndBuyButton';
import BookPlacard from './Components/BookPlacard';
import TypeFilterModal from './Components/TypeFilterModal';

export default function SellAndBuyPage({navigation}) {
  const [checkedBuy, setCheckedBuy] = useState(true);
  const [checkedSell, setCheckedSell] = useState(true);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [placards, setPlacards] = useState([]);

  const [searchItem, setSearchItem] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  async function getBookPlacards(searchInput = '') {
    let placardType; //placardType:  1 is Buy / 2 is Sell
    if (checkedBuy === true && checkedSell === false) {
      placardType = 1;
    } else if (checkedBuy === false && checkedSell === true) {
      placardType = 2;
    } else {
      placardType = 1; // *Need Edit
    }
    try {
      fetch('https://api.farakhu.markop.ir/api/Offer/ViewOffers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          OfferType: placardType,
          Search: searchInput,
          Start: '0',
          Step: '50',
        }),
      })
        .then(async response => {
          return await response.json();
        })
        .then(data => {
          setPlacards(data.offer);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log('useEffect sell and buy run');
    getBookPlacards();
  }, []);

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
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                console.log(searchItem);
                getBookPlacards(searchItem.trim());
              }}>
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
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                console.log(searchItem);
                getBookPlacards(searchItem.trim());
              }}>
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
            onChangeText={data => setSearchItem(data)}
            onSubmitEditing={() => {
              console.log(searchItem);
              getBookPlacards(searchItem.trim());
            }}
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
          onPress={() => setFilterModalOpen(true)}
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
        <TypeFilterModal
          visible={filterModalOpen}
          onScreenPress={() => setFilterModalOpen(false)}
          buyCheckBoxValue={checkedBuy}
          sellCheckBoxValue={checkedSell}
          buyOnpress={() => setCheckedBuy(checkedBuy === false ? true : false)}
          sellOnpress={() =>
            setCheckedSell(checkedSell === false ? true : false)
          }
        />
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
      <ScrollView
        style={styles.bookPlacardsContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              getBookPlacards();
              setTimeout(() => {
                setRefreshing(false);
              }, 1500);
            }}
            colors={['#4285F4', '#DB4437', '#F4B400', '#0F9D58']}
          />
        }>
        {placards.map(data => {
          return (
            <BookPlacard
              title={data.title}
              price={data.price}
              key={data.offerId}
              onPress={() => {
                navigation.navigate('AdvertisementPage', {
                  title: data.title,
                  price: data.price,
                  description: data.description,
                  imageAddress: {
                    uri: 'https://www.dliflc.edu/wp-content/uploads/2018/11/book.jpg',
                  },
                });
              }}
            />
          );
        })}
      </ScrollView>

      {/* </ScrollView> */}
      {/* End of Book Placard Section  */}

      {/* footer section */}
      <View
        style={[
          styles.footer,
          {
            backgroundColor: Colors.topColor(),
            borderTopColor:
              window.Theme === 'dark' ? 'rgb(0,104,109)' : 'rgb(0, 156, 163)',
          },
        ]}>
        <SellAndBuyButton
          title="آگهی‌ها"
          imageAddress={require('../../resources/photos/PanelPages/megaphon-red.png')}
          bgColor={window.Theme === 'dark' ? 'black' : 'rgb(34,40,49)'}
          textColor="red"
          borderColor="red"
          width={'85%'}
          bgWidth={'90%'}
          bgHeight={'50%'}
          bottom="3.2%"
        />
        {window.Theme === 'light' && (
          <SellAndBuyButton
            onPress={() => {
              navigation.push('MakeAdvertisementPage');
            }}
            title="ثبت آگهی"
            imageAddress={require('../../resources/photos/PanelPages/plus-light.png')}
            bgColor={
              window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(0,173,181)'
            }
            textColor="white"
            borderColor={
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
            }
            width={'90%'}
            bgWidth={'100%'}
            bgHeight={'50%'}
            bottom="3.2%"
          />
        )}
        {window.Theme === 'dark' && (
          <SellAndBuyButton
            onPress={() => {
              navigation.push('MakeAdvertisementPage');
            }}
            title="ثبت آگهی"
            imageAddress={require('../../resources/photos/PanelPages/plus-dark.png')}
            bgColor="rgb(0,173,181)"
            textColor="rgb(0,173,181)"
            borderColor={
              window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
            }
            width={'90%'}
            bgWidth={'100%'}
            bgHeight={'50%'}
            bottom="3.2%"
          />
        )}
        <SellAndBuyButton
          onPress={() => {
            navigation.push('MyAdvertisementPage');
          }}
          title="آگهی‌های من"
          imageAddress={require('../../resources/photos/PanelPages/user-green.png')}
          bgColor={Colors.backgroundColor()}
          textColor={window.Theme === 'dark' ? 'rgb(0,173,181)' : 'white'}
          borderColor={
            window.Theme === 'dark' ? 'rgb(0,173,181)' : 'rgb(0, 156, 163)'
          }
          width={'85%'}
          bgWidth={'90%'}
          bgHeight={'50%'}
          bottom="3.2%"
        />
      </View>
    </View>
  );
}
