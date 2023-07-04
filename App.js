import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/routes/homeStack'
import Setting from './src/routes/settingStack';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName="Home" screenOptions={{tabBarActiveTintColor:'tomato',tabBarInActiveTintColor:'grey',
                        headerShown:false}}> 
        
        <Tab.Screen name="Home" component={Home} options={{
          
          tabBarIcon: ({ focused }) => (
            
            <AntDesign name="home" color={focused?'tomato':'grey'} size={25} />
            ),
            tabBarLabel: 'Home',
        }}/>
        <Tab.Screen name="Settings" component={Setting} options={{
          
          tabBarIcon: ({ focused }) => (
            
            <Feather name="settings"  color={focused?'tomato':'grey'} size={25} />
            ),
            tabBarLabel: 'Setting',
        }}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



