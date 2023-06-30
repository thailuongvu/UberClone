
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-web';
import Separator from '../components/separators';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from '../screens/home';
import rideScreen from '../screens/ride';
const Stack = createStackNavigator();
export default function Home() {
  return (
    
    // <Stack.Navigator initialRouteName="Home">
    //   <Stack.Screen name="Home" component={homeScreen} />
    //   <Stack.Screen name="rideScreen" component={rideScreen} />
    // </Stack.Navigator>
    <View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
