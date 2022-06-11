
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: () => <BottomIcons name='home' />
          }}
      />

      <Tab.Screen
       name="Course_List"
       component={Course_List}
       options={{
        headerShown: false,
        tabBarIcon: () => <BottomIcons name='home' />
      }}
      />  

      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='person' />
        }}
       />  
     </Tab.Navigator>
  );
}
// npx react-native link react-native-vector-icons  

const BottomIcons = props => {
  return (
    <IonicIcon name={props.name} size={20} />
  )
}

export default Home;