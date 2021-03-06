import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {styles} from '../Theme/styles';

const CreateAccount = ({navigation}) => {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const createaccount = () => {
    auth()
      .createUserWithEmailAndPassword(email, Password)
      .then(newUser => {
        console.log('User account created & signed in!');
        console.log(newUser)
        database().ref('/Hathakon/users').child(newUser.user.uid).set({
          Fname,
          Lname,
          email,
          Password,
        });
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  // import data from firebase

  // database().ref('Admin').once("value").then(function(snapshot) {
  // console.log(snapshot.val()["email"])

  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <TextInput
          placeholder="First Name"
          onChangeText={val => setFname(val)}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Last Name"
          onChangeText={val => setLname(val)}
        />
      </View>
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
        style={[
          styles.TouchableBtn1,
          {marginHorizontal: 50, paddingHorizontal: 30},
        ]}
        onPress={() => createaccount()}>
        <Text style={styles.TouchableText1}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => CreateAccount()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 5,
          marginHorizontal: 30,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#777777',
            textAlign: 'center',
            fontSize: 12,
            padding: 5,
          }}>
          Already Have an Account?
        </Text>
        <Text style={{color: '#777777', textAlign: 'center', fontSize: 14}}>
          Login Now!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;
