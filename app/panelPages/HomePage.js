import React, {useEffect} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import BigButtonOfMainMenu from './Component/BigButtonOfMainMenu';
import SmallButtonOfMainMenu from './Component/SmallButtonOfMainMenu';
import ProfileButton from './Component/ProfileButton';
import Colors from './colors';
import {Icon} from 'react-native-elements';
import ContactUs from './drawerPages/ContactUs';

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

export function CustomDrawer(props) {
  async function singOutFunction() {
    try {
      return await fetch('https://api.farakhu.markop.ir/api/Account/SignOut', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <View style={styles.customDrawerStyle}>
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
        onPress={() => {
          props.navigation.push('SuggestionPage');
        }}
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
        onPress={() => {
          props.navigation.push('contactUs');
        }}
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
        onPress={() => {
          singOutFunction().then(async () => {
            await AsyncStorage.setItem('isLogin', 'not');
            props.navigation.replace('MainPage');
          });
        }}
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
      <Drawer.Screen name={'home'} component={Home} />
      <Drawer.Screen name={'contactUs'} component={ContactUs} />
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
        <Text style={styles.faraKhuTextLogoStyle}>فراخو</Text>
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
        <Text style={styles.profileTextStyle}>پروفایل</Text>
      </View>
      <ProfileButton />
    </View>
  );
}
