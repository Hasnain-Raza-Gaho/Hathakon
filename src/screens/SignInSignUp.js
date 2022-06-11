import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Theme/styles';

const SignInSignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <TouchableOpacity
          style={styles.TouchableBtn1}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.TouchableText1}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item2}>
        <TouchableOpacity
          style={styles.TouchableBtn2}
          onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.TouchableText2}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInSignUp;

const STYLES = StyleSheet.create({});
