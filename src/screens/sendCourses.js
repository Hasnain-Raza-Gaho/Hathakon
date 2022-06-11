import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import database from '@react-native-firebase/database';
import {styles} from '../Theme/styles';

const SendCourses = ({navigation}) => {
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [timing, setTiming] = useState('');
  const [teacher, setTeacher] = useState('');
  const [qualifications, setQualifications] = useState('');

  const addcourse = () => {
    let key = database().ref('/Hathakon/courses').push().key;

    database().ref('/Hathakon/courses').child(key).set({
      course,
      duration,
      timing,
      qualifications,
      teacher,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <TextInput
          placeholder="Course Name"
          onChangeText={val => setCourse(val)}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Duration"
          onChangeText={val => setDuration(val)}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Course Timing"
          onChangeText={val => setTiming(val)}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Teacher Name"
          onChangeText={val => setTeacher(val)}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Minimum Qualifications"
          onChangeText={val => setQualifications(val)}
        />
      </View>
      <TouchableOpacity
        style={[styles.TouchableBtn1, {marginHorizontal: 50}]}
        onPress={() => addcourse()}>
        <Text style={styles.TouchableText1}>Add Course</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendCourses;
