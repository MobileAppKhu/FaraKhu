import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import BigButtonOfMainMenu from './Component/BigButtonOfMainMenu';
import SmallButtonOfMainMenu from './Component/SmallButtonOfMainMenu';
import ProfileButton from './Component/ProfileButton';
import colors from './colors';
import {Icon} from 'react-native-elements';
import ContactUsPage from './drawerPages/ContactUsPage';
import Colors from './colors';

const IconForDrawerItem = ({iconName, iconType, iconSize, text}) => {
  return (
    <View style={styles.iconViewStyle}>
      <Icon
        size={iconSize}
        name={iconName}
        type={iconType}
        color={Colors.bigButtonTextColor()}
      />
      <View style={styles.viewTextStyle}>
        <Text
          style={[styles.iconTextStyle, {color: colors.bigButtonTextColor()}]}>
          {text}
        </Text>
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
        <Text style={[styles.iconTextStyle, {color: 'rgb(238,238,238)'}]}>
          فراخو
        </Text>
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
          props.navigation.push('ContactUsPage');
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
        onPress={() => {
          props.navigation.push('ChangePasswordPageWithOldPassword');
        }}
      />
      <View style={styles.separatorLine} />
      <DrawerItem
        label={''}
        onPress={() => {
          singOutFunction().then(async () => {
            await AsyncStorage.setItem('isLogin', 'not');
            await AsyncStorage.setItem('theme', 'light');
            window.Theme = 'light';
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
        label={''}
        onPress={async () => {
          const newTheme = window.Theme === 'dark' ? 'light' : 'dark';
          await AsyncStorage.setItem('theme', newTheme);
          window.Theme = newTheme;
          props.navigation.replace('HomePage');
        }}
        icon={() => (
          <IconForDrawerItem
            iconSize={25}
            iconType={'material-community'}
            iconName={'theme-light-dark'}
            text={'تغییر تم'}
          />
        )}
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
        backgroundColor: colors.topColor(),
        width: '49%',
      }}>
      <Drawer.Screen name={'home'} component={Home} />
      <Drawer.Screen name={'contactUs'} component={ContactUsPage} />
    </Drawer.Navigator>
  );
}

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.backgroundColor(),
      }}>
      <View style={[styles.topPart, {backgroundColor: colors.topColor()}]}>
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
          style={[
            styles.faraKhuTextLogoStyle,
            {color: colors.bigButtonTextColor()},
          ]}>
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
        <View style={styles.rightPhotoContainerStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.rightPhotoStyle}
            source={require('../resources/photos/PanelPages/rightAbstractShapes.png')}
          />
        </View>
        <View style={styles.leftPhotoContainerStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.rightPhotoStyle}
            source={require('../resources/photos/PanelPages/leftAbstractShape.png')}
          />
        </View>
      </View>

      <View
        style={[
          styles.bottomPart,
          {
            backgroundColor: Colors.topColor(),
          },
        ]}>
        <Text
          style={[
            styles.profileTextStyle,
            {color: Colors.bigButtonTextColor()},
          ]}>
          پروفایل
        </Text>
      </View>
      <ProfileButton
        navigation={navigation}
        address={require('../resources/photos/PanelPages/profileLogo.png')}
        onPressFunction={() => {
          navigation.push('ProfilePage');
        }}
      />
    </View>
  );
}
