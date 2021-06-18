import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BigButtonOfMainMenu from './Component/BigButtonOfMainMenu';
import SmallButtonOfMainMenu from './Component/SmallButtonOfMainMenu';
import ProfileButton from './Component/ProfileButton';
import Colors from './colors';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator();
export default function HomePage() {
  return (
    <Drawer.Navigator
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
  AsyncStorage.setItem('theme', 'light');
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
        <ProfileButton />
        <Text>پروفایل</Text>
      </View>
    </View>
  );
}
