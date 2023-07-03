import React from "react";
import { Button,View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Image, ImageBackground } from "react-native-web";


function homeScreen({ navigation }) {
    return (
      <SafeAreaView>
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
            onPress={() =>navigation.navigate('rideScreen')}>
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

export default homeScreen