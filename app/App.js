import React from 'react';
import MainPage from './loginPage/MainPage';
import LogIn from './loginPage/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
