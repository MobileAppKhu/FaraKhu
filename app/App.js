import React from 'react';
import MainPage from './loginPages/MainPage';
import LogInPage from './loginPages/logIn/LoginPage';
import FirstSignUpPage from './loginPages/signUp/FirstSignUpPage';
import SecondSignUpPage from './loginPages/signUp/SecondSignUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPasswordPage from './loginPages/forgetPassword/ForgetPasswordPage';
import VerificationCodePage from './loginPages/signUp/VerificationCodePage';
import ChangePasswordPage from './loginPages/forgetPassword/ChangePasswordPage';
import PasswordChangeSuccessfully from './loginPages/forgetPassword/PasswordChangeSuccessfully';
import SignUpSuccessfully from './loginPages/signUp/SignUpSuccessfully';
import FirstLoadingPage from './loginPages/logIn/FirstLoadingPage';
import SecondLoadingPage from './loginPages/logIn/SecondLoadingPage';
import HomePage from './panelPages/HomePage';
import ContactUsPage from './panelPages/drawerPages/ContactUsPage';
import SuggestionPage from './panelPages/drawerPages/SuggestionPage';
import ChangePasswordPageWithOldPassword from './panelPages/drawerPages/ChangePasswordPageWithOldPassword';
import SuggestionSuccessfullyPage from './panelPages/drawerPages/SuggestionSuccessfullyPage';
import PasswordChangedSuccessfullyWithOldPassword from './panelPages/drawerPages/PasswordChangedSuccessfullyWithOldPassword';
import LoadingPage from './loginPages/LoadingPage';
import ProfilePage from './panelPages/profilePages/ProfilePage';
import EditProfilePage from './panelPages/profilePages/EditProfilePage';
import ViewAllLessonPages from './panelPages/myLessonPages/ViewAllLessonPages';
import PersonalCalender from './panelPages/calendarPages/PersonalCalender';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'LoadingPage'} component={LoadingPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="FirstLoadingPage" component={FirstLoadingPage} />
        <Stack.Screen
          name={'SecondLoadingPage'}
          component={SecondLoadingPage}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="FirstSignUpPage" component={FirstSignUpPage} />
        <Stack.Screen name="SecondSignUpPage" component={SecondSignUpPage} />
        <Stack.Screen
          name="ForgetPasswordPage"
          component={ForgetPasswordPage}
        />
        <Stack.Screen
          name="VerificationCodePage"
          component={VerificationCodePage}
        />
        <Stack.Screen
          name={'ChangePasswordPage'}
          component={ChangePasswordPage}
        />
        <Stack.Screen
          name={'PasswordChangeSuccessfully'}
          component={PasswordChangeSuccessfully}
        />
        <Stack.Screen
          name={'SignUpSuccessfully'}
          component={SignUpSuccessfully}
        />
        <Stack.Screen name={'ContactUsPage'} component={ContactUsPage} />
        <Stack.Screen name={'SuggestionPage'} component={SuggestionPage} />
        <Stack.Screen
          name={'SuggestionSuccessfullyPage'}
          component={SuggestionSuccessfullyPage}
        />
        <Stack.Screen
          name={'ChangePasswordPageWithOldPassword'}
          component={ChangePasswordPageWithOldPassword}
        />
        <Stack.Screen
          name={'PasswordChangedSuccessfullyWithOldPassword'}
          component={PasswordChangedSuccessfullyWithOldPassword}
        />
        <Stack.Screen name={'ProfilePage'} component={ProfilePage} />
        <Stack.Screen name={'EditProfilePage'} component={EditProfilePage} />
        <Stack.Screen
          name={'ViewAllLessonPages'}
          component={ViewAllLessonPages}
        />
        <Stack.Screen name={'PersonalCalender'} component={PersonalCalender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
