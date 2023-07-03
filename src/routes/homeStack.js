
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-web';
import Separator from '../components/separators';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from '../screens/home';
import rideScreen from '../screens/ride';



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
     
    }}>
      <HomeStack.Screen name="Home" component={homeScreen}/>
      
      <HomeStack.Screen name="rideScreen" component={rideScreen } />
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen
