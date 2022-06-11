import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Theme/styles';

const SplashScreen = ({navigation}) => {
  //   useEffect(()=>{
  //     setTimeout(()=>{
  //         navigation.navigate("SignInSignUp")
  //     },500)
  // },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9be895',
      }}>
      <Image
        source={require('../smit.jpg')}
        style={{
          width: '70%',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
