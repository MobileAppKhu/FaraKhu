import React, {useEffect} from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BigButtonOfMainMenu from './Component/BigButtonOfMainMenu';
import SmallButtonOfMainMenu from './Component/SmallButtonOfMainMenu';
import ProfileButton from './Component/ProfileButton';
import Colors from './colors';
import {Icon} from 'react-native-elements';

const IconForDrawerItem = ({iconName, iconType, iconSize, text}) => {
  return (
    <View style={styles.iconViewStyle}>
      <Icon size={iconSize} name={iconName} type={iconType} color={'white'} />
      <View style={styles.viewTextStyle}>
        <Text style={styles.iconTextStyle}>{text}</Text>
      </View>
    </View>
  );
};

export function CustomDrawer() {
  return (
    <View>
      <View style={{alignItems: 'center', height: '20%', marginBottom: '7%'}}>
        <Image
          source={require('../resources/photos/PanelPages/faraKhuLogo.png')}
          style={styles.faraKhuLogo}
        />
        <Text style={[styles.iconTextStyle]}>فراخو</Text>
      </View>
      <View style={[styles.separatorLine, {marginBottom: '-5%'}]} />
      <DrawerItem
        label={''}
        onPress={() => {}}
        icon={() => (
          <IconForDrawerItem
            iconSize={26}
            iconType={'simple-line-icon'}
            iconName={'question'}
            text={'سوالات متداول'}
          />
        )}
        style={{
          marginTop: '10%',
          flexDirection: 'column-reverse',
        }}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={''}
        onPress={() => {}}
        icon={() => (
          <IconForDrawerItem
            text={'انتقادات و پیشنهادات'}
            iconType={'simple-line-icon'}
            iconSize={30}
            iconName={'bulb'}
          />
        )}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={''}
        onPress={() => {}}
        icon={() => (
          <IconForDrawerItem
            iconSize={30}
            iconType={'material-community'}
            iconName={'headset'}
            text={'ارتباط با ما'}
          />
        )}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={''}
        icon={() => (
          <IconForDrawerItem
            iconType={'simple-line-icon'}
            iconSize={26}
            iconName={'lock'}
            text={'تغییر رمز عبور'}
          />
        )}
        onPress={() => {}}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={''}
        onPress={() => {}}
        icon={() => (
          <IconForDrawerItem
            iconSize={25}
            iconType={'simple-line-icon'}
            iconName={'logout'}
            text={'خروج از حساب کاربری'}
          />
        )}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={'تغییر رنگ'}
        onPress={() => {}}
        labelStyle={styles.iconTextStyle}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function HomePage() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      initialRouteName="Home"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: Colors.topColor(),
        width: '49%',
      }}>
      <Drawer.Screen
        name={'home'}
        component={Home}
        options={{
          drawerIcon: config => (
            <Icon
              size={40}
              name={'envelope'}
              type={'evilicon'}
              color={'white'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Home({navigation}) {
  useEffect(() => {
    window.Theme = 'light';
    AsyncStorage.setItem('theme', 'light');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.topPart}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.menuLogoImage}>
          <Image
            source={require('../resources/photos/PanelPages/menuLogoLight.png')}
            style={styles.menuLogoImage}
          />
        </TouchableWithoutFeedback>
        <Text
          style={{
            fontFamily: 'Wasm-font-Bold',
            fontSize: 20,
            marginRight: '27%',
            color: 'rgb(238,238,238)',
            fontWeight: 'bold',
          }}>
          فراخو
        </Text>
      </View>
      <BigButtonOfMainMenu
        message={'درس های من'}
        imageAddress={require('../resources/photos/PanelPages/myLessonLogoLight.png')}
      />
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          message={'خرید و فروش کتاب'}
          imageAddress={require('../resources/photos/PanelPages/bookLogoLight.png')}
        />
        <SmallButtonOfMainMenu
          message={'تقویم شخصی'}
          marginRight={'3.5%'}
          imageAddress={require('../resources/photos/PanelPages/calendarLogoLight.png')}
        />
      </View>
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          message={'فراخوان ها'}
          imageAddress={require('../resources/photos/PanelPages/callLogoLight.png')}
        />
        <SmallButtonOfMainMenu
          marginRight={'3.5%'}
          message={'اخبار دانشگاه'}
          imageAddress={require('../resources/photos/PanelPages/newsLogoLight.png')}
        />
      </View>
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          message={'انجمن های دانشگاه'}
          imageAddress={require('../resources/photos/PanelPages/associationLogoLight.png')}
        />
        <SmallButtonOfMainMenu
          message={'نقشه دانشگاه'}
          marginRight={'3.5%'}
          imageAddress={require('../resources/photos/PanelPages/mapLogoLight.png')}
        />
      </View>
      <View style={styles.viewOfTwoImage}>
        <Image
          style={styles.rightPhotoStyle}
          source={require('../resources/photos/PanelPages/rightAbstractShapes.png')}
        />
        <Image
          style={styles.leftPhotoStyle}
          source={require('../resources/photos/PanelPages/leftAbstractShape.png')}
        />
      </View>

      <View style={styles.bottomPart}>
        <Text
          style={{
            color: 'white',
            marginTop: 40,
            fontFamily: 'IranSans',
            fontWeight: 'bold',
          }}>
          پروفایل
        </Text>
      </View>
      <ProfileButton />
    </View>
  );
}
