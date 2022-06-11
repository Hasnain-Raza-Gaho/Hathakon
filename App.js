import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './src/Theme/styles';
import SplashScreen from './src/screens/splashScreen';
import SignInSignUp from './src/screens/SignInSignUp';
import CreateAccount from './src/screens/createAccount';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInSignUp"
          component={SignInSignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
