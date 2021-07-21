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
  Pressable,
  Modal,
  Platform,
  ToastAndroid,
  AlertIOS,
  RefreshControl,
} from 'react-native';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import SellAndBuyButton from './Components/SellAndBuyButton';
import BookPlacardWithButton from './Components/BookPlacardWithButton';
import TypeFilterModal from './Components/TypeFilterModal';
import {EditButton as ActionButton} from './Components/BookPlacardWithButton';

async function getMyBookPlacards() {
  try {
    return fetch('https://api.farakhu.markop.ir/api/Offer/ViewUserOffers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then(async response => {
      return await response.json();
    });
  } catch (err) {
    console.log(err);
  }
}

async function removePlacard(placardId) {
  try {
    return await fetch('https://api.farakhu.markop.ir/api/Offer/RemoveOffer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        OfferId: placardId,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}

export default function MyAdvertisementPage({navigation}) {
  const [checkedBuy, setCheckedBuy] = useState(true);
  const [checkedSell, setCheckedSell] = useState(true);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [outputPlacards, setOutputPlacards] = useState([]);
  const [myPlacards, setMyPlacards] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const [removingPlacardId, setRemovingPlacardId] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  function searchPlacard(searchInput = '') {
    let placardType;
    if (checkedBuy === true && checkedSell === false) {
      placardType = 'Buy';
    } else if (checkedBuy === false && checkedSell === true) {
      placardType = 'Sell';
    } else {
      placardType = 'Both';
    }
    if (searchInput !== '') {
      if (placardType === 'Both') {
        setOutputPlacards(
          myPlacards.filter(placard => {
            return (
              placard.title.includes(searchInput) ||
              placard.description.includes(searchInput)
            );
          }),
        );
      } else {
        setOutputPlacards(
          myPlacards.filter(placard => {
            return (
              placard.offerType === placardType &&
              (placard.title.includes(searchInput) ||
                placard.description.includes(searchInput))
            );
          }),
        );
      }
    } else {
      if (placardType === 'Both') {
        setOutputPlacards(myPlacards);
      } else {
        setOutputPlacards(
          myPlacards.filter(placard => {
            return placard.offerType === placardType;
          }),
        );
      }
    }
  }

  useEffect(() => {
    console.log('useEffect myAds run');
    getMyBookPlacards().then(data => {
      console.log(data.offers);
      setMyPlacards(data.offers);
      setOutputPlacards(data.offers);
    });
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
                searchPlacard(searchItem.trim());
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
                searchPlacard(searchItem.trim());
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
              searchPlacard(searchItem.trim());
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
              getMyBookPlacards().then(data => {
                setMyPlacards(data.offers);
                // setOutputPlacards(data.offers);
                searchPlacard();
              });
              setTimeout(() => {
                setRefreshing(false);
              }, 1500);
            }}
            colors={['#4285F4', '#DB4437', '#F4B400', '#0F9D58']}
          />
        }>
        {outputPlacards.map(data => {
          return (
            <BookPlacardWithButton
              title={data.title}
              price={data.price}
              key={data.offerId}
              avatarId={data.avatarId}
              onPress={() => {
                navigation.navigate('AdvertisementPage', {
                  title: data.title,
                  price: data.price,
                  description: data.description,
                  imageAddress: data.avatarId,
                });
              }}
              editButtonOnPress={() => {
                navigation.navigate('EditAdvertisementPage', {
                  title: data.title,
                  price: data.price,
                  description: data.description,
                  offerType: data.offerType,
                  offerId: data.offerId,
                  imageAddress: data.avatarId,
                });
              }}
              deleteButtonOnPress={() => {
                setDeleteModalOpen(true);
                setRemovingPlacardId(data.offerId);
                console.log(removingPlacardId); // state does not change immediately
              }}
            />
          );
        })}
      </ScrollView>

      {/* Delete Placard Modal */}
      <Modal visible={deleteModalOpen} transparent={true} animationType="fade">
        <Pressable
          style={[
            styles.mainViewOfDeletePlacardModal,
            {
              backgroundColor:
                window.Theme === 'dark'
                  ? 'rgba(41, 52, 82,0.6)'
                  : 'rgba(41, 52, 82,0.5)',
            },
          ]}>
          <View
            style={[
              styles.deletePlacardModal,
              {
                backgroundColor:
                  window.Theme === 'dark'
                    ? 'rgb(34,40,49)'
                    : 'rgb(255,255,255)',
              },
            ]}>
            <View style={styles.deletePlacardModalIcon}>
              <Image
                style={{height: '90%', aspectRatio: 1, resizeMode: 'cover'}}
                source={require('../../resources/photos/PanelPages/exclamation.png')}
              />
            </View>
            <Text
              style={[
                styles.deletePlacardModalText,
                {color: window.Theme === 'dark' ? 'white' : 'black'},
              ]}>
              آیا از حذف آگهی خود مطمئنید؟
            </Text>
            <View style={styles.deletePlacardModalButtons}>
              <ActionButton
                onPressFunction={() => {
                  console.log('removing item: ' + removingPlacardId);
                  removePlacard(removingPlacardId).then(async response => {
                    if (response.status === 200) {
                      getMyBookPlacards().then(data => {
                        setMyPlacards(data.offers);
                        setOutputPlacards(data.offers);
                      });
                      if (Platform.OS === 'android') {
                        ToastAndroid.show(
                          'آگهی شما با موفقیت حذف شد',
                          ToastAndroid.TOP,
                        );
                      } else {
                        AlertIOS.alert('آگهی شما با موفقیت حذف شد');
                      }
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
                  setDeleteModalOpen(false);
                }}
                message="بله"
                textColor="white"
                bgColor="rgb(0,173,181)"
                borderRadius={12}
                borderWidth={1}
                borderColor="rgb(112,112,112)"
                fontSize={14}
                width={'47%'}
                height={'55%'}
              />
              <ActionButton
                onPressFunction={() => setDeleteModalOpen(false)}
                message="خیر"
                textColor={window.Theme === 'dark' ? 'white' : 'black'}
                bgColor={
                  window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)'
                }
                borderRadius={12}
                borderWidth={1}
                borderColor={
                  window.Theme === 'dark'
                    ? 'rgb(0,173,181)'
                    : 'rgb(112,112,112)'
                }
                fontSize={14}
                width={'47%'}
                height={'55%'}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
      {/* End of Delete Placard Modal */}
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
          title="آگهی‌های من"
          imageAddress={require('../../resources/photos/PanelPages/user-red.png')}
          bgColor={window.Theme === 'dark' ? 'black' : 'rgb(34,40,49)'}
          textColor="red"
          borderColor="red"
          width={'85%'}
          bgWidth={'90%'}
          bgHeight={'50%'}
          bottom="3.2%"
        />
      </View>
    </View>
  );
}
