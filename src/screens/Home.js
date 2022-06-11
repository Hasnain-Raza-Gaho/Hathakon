import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegForm from './RegForm';
import Courses from './Courses';
import SuccessStories from './SuccessStories';
import UserProfile from './UserProfile';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          headerShown: false,
        //   tabBarIcon: () => <BottomIcons name="home" />,
        }}
      />

      <Tab.Screen
        name="SuccessStories"
        component={SuccessStories}
        options={{
          headerShown: false,
        //   tabBarIcon: () => <BottomIcons name="home" />,
        }}
      />

      <Tab.Screen
        name="RegForm"
        component={RegForm}
        options={{
          headerShown: false,
        //   tabBarIcon: () => <BottomIcons name="person" />,
        }}
      />

      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        //   tabBarIcon: () => <BottomIcons name="person" />,
        }}
      />
    </Tab.Navigator>
  );
}
// npx react-native link react-native-vector-icons

const BottomIcons = props => {
  return <IonicIcon name={props.name} size={20} />;
};

export default Home;
