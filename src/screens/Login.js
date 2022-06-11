import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Theme/styles';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.input1}>
        <TextInput placeholder="Password" />
      </View>
      <TouchableOpacity
        style={[styles.TouchableBtn1, {marginHorizontal: 50}]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.TouchableText1}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateAccount')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 5,
          marginHorizontal: 40,
          borderRadius: 10
        }}>
        <Text style={{color: '#777777'}}>Don't Have Account, Create Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
