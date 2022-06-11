import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from '../Theme/styles';
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

const Courses = () => {
  const [Data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      database()
        .ref('/Hathakon/courses')
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
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {Data.map((v, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  marginVertical: 10,
                  width: '100%',
                  
                }}>
                <Text> Course Name : {v.course}</Text>
                <Text> Course Duration : {v.duration}</Text>
                <Text> Course Timing : {v.timing}</Text>
                <Text> Tutor : {v.teacher}</Text>
                <Text> Minimum Qualification : {v.qualifications}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Courses;
