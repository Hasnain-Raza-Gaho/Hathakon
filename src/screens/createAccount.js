import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Theme/styles';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <TextInput placeholder="First Name" />
      </View>
      <View style={styles.input1}>
        <TextInput placeholder="Last Name" />
      </View>
      <View style={styles.input1}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.input1}>
        <TextInput placeholder="Password" />
      </View>
      <TouchableOpacity
        style={[
          styles.TouchableBtn1,
          {marginHorizontal: 50, paddingHorizontal: 30},
        ]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.TouchableText1}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateAccount')}
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
