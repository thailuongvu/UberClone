import React from 'react'
import { Button, Text, View } from 'react-native'
import MapView  from 'react-native-maps'
function CarScreen({ navigation }) {
  return (



    <View className='flex-1 items-center  bg-white'>
          <MapView className='h-2/4 w-full'
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }} />
      <Text>Choose Car</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  )
}
export default CarScreen
