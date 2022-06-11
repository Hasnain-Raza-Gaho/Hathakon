import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {styles} from '../Theme/styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, Password)
      .then(loggedInUser => {
        console.log(loggedInUser, 'Login Successful!');
        if (loggedInUser.user.uid == 'oHy5LeF6yAgMJfsOFJ4TXNkwaZn1') {
          navigation.navigate('AdminHome');
        } else {
          navigation.navigate('Home');
        }
      })
      .catch(eror => {
        console.log(error, 'Login fail!! ');
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <TextInput placeholder="Email" onChangeText={val => setEmail(val)} />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Password"
          onChangeText={val => setPassword(val)}
        />
      </View>
      <TouchableOpacity
        style={[styles.TouchableBtn1, {marginHorizontal: 50}]}
        onPress={() => login()}>
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
          borderRadius: 10,
        }}>
        <Text style={{color: '#777777'}}>Don't Have Account, Create Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
