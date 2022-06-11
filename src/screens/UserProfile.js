import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {styles} from '../Theme/styles';

const UserProfile = () => {
  const [Data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      database()
        .ref('/Hathakon/users')
        .child(auth().currentUser.uid)
        .once('value')
        .then(snapshot => {
          let snap = snapshot.val();

          let data = Object.values(snapshot.val());
          console.log(data);
          setData(data);
          // console.log(Data);
          // console.log(snap);
          setLoading(false);
          // console.log('done');
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      {loading ? <Text>Loading....</Text> : <Text>Name: {Data[1]}</Text>}
    </View>
  );
};

export default UserProfile;
