import React,{useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../Theme/styles';

const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("SignInSignUp")
    },500)
},[])

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
