import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Button,View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Image, ImageBackground } from "react-native";

import { TextInput } from "react-native-gesture-handler";
import Separator from "../components/separators";


function HomeScreen({ navigation }) {

    return (
      <SafeAreaView>
        <Text></Text>
          <View className='flex-row pb-3 items-center mx-4 space-x-2 mt-8 px-1'>
            <Image source={{uri:'https://lelogama.go-jek.com/component/factsheet/icon/2_4.54.18_PM.jpg'}}
            className='h-10 w-10 bg-gray-300 p-4 rounded-full'/>

             
            
            <View className='flex-1'> 
              <Text className="font-bold text-gray-400 text-xs">Grab now</Text>
              <Text className='font-bold text-xl'>Current Location
                <AntDesign name="caretdown" size={15} color="black" />
              </Text>
            </View>
            
            <TouchableOpacity onPress={() =>navigation.navigate('rideScreen')}>
              <AntDesign name="user" size={30} color="black" />
            </TouchableOpacity>

          </View>
          {/* {Search} */}
          
          <View>
            <View className='flex-row space-x-2 bg-gray-200 p-3 mx-2'> 
            <AntDesign name="search1" size={30} color="black" />
            <TextInput placeholder="Find your destination" ></TextInput>
            </View>
          </View>
          <Separator/>



        <View style={[styles.container,{flexDirection:'row'}]}>
          
        <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}
            onPress={() =>navigation.navigate('rideScreen')}>
          <Image
            source={
                require('../../assets/ride.png')
          
                }
            style={styles.buttonImageIconStyle}
        />

        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}
            onPress={() =>navigation.navigate('carScreen')}>
          <Image
            source={
                require('../../assets/car.jpg')
          
                }
            style={styles.buttonImageIconStyle}
        />

        </TouchableOpacity>

          
        </View>
        <View>

        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',
      
    },

    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 50,
      width:100,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 90,
      resizeMode: 'stretch',
    },
  });

export default HomeScreen