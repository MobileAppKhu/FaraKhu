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
        <View style={styles.faraKhuLogo}>
          <Image
            resizeMode={'contain'}
            source={require('../resources/photos/PanelPages/faraKhuLogo.png')}
            style={{flex: 1, aspectRatio: 1}}
          />
        </View>
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
            await AsyncStorage.setItem('theme', 'dark');
            window.Theme = 'dark';
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
          }}>
          <View style={styles.menuLogoImage}>
            <Image
              resizeMode={'contain'}
              source={
                window.Theme === 'light'
                  ? require('../resources/photos/PanelPages/menuLogoLight.png')
                  : require('../resources/photos/PanelPages/menuLogoDark.png')
              }
              style={{flex: 1, aspectRatio: 1}}
            />
          </View>
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
        onPressFunction={() => {
          navigation.push('ViewAllLessonPages');
        }}
        message={'درس های من'}
        imageAddress={
          window.Theme === 'light'
            ? require('../resources/photos/PanelPages/myLessonLogoLight.png')
            : require('../resources/photos/PanelPages/myLessonLogoDark.png')
        }
      />
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          onPressFunction={() => {
            console.log('hi');
            navigation.push('SellAndBuyPage');
          }}
          message={'خرید و فروش کتاب'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/bookLogoLight.png')
              : require('../resources/photos/PanelPages/bookLogoDark.png')
          }
        />
        <SmallButtonOfMainMenu
          onPressFunction={() => {
            navigation.push('PersonalCalender');
          }}
          message={'تقویم شخصی'}
          marginRight={'3.5%'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/calendarLogoLight.png')
              : require('../resources/photos/PanelPages/calendarLogoDark.png')
          }
        />
      </View>
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          message={'فراخوان ها'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/callLogoLight.png')
              : require('../resources/photos/PanelPages/callLogoDark.png')
          }
        />
        <SmallButtonOfMainMenu
          marginRight={'3.5%'}
          message={'اخبار دانشگاه'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/newsLogoLight.png')
              : require('../resources/photos/PanelPages/newsLogoDark.png')
          }
        />
      </View>
      <View style={styles.towButtonViewStyle}>
        <SmallButtonOfMainMenu
          message={'انجمن های دانشگاه'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/associationLogoLight.png')
              : require('../resources/photos/PanelPages/associationLogoDark.png')
          }
        />
        <SmallButtonOfMainMenu
          message={'نقشه دانشگاه'}
          marginRight={'3.5%'}
          imageAddress={
            window.Theme === 'light'
              ? require('../resources/photos/PanelPages/mapLogoLight.png')
              : require('../resources/photos/PanelPages/mapLogoDark.png')
          }
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
        address={
          window.Theme === 'light'
            ? require('../resources/photos/PanelPages/profileLogoLight.png')
            : require('../resources/photos/PanelPages/profileLogoDark.png')
        }
        onPressFunction={() => {
          navigation.push('ProfilePage');
        }}
      />
    </View>
  );
}
