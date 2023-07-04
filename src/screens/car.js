import React from "react";
import { Button, Text, View } from 'react-native';
function CarScreen({ navigation }) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Choose Car</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  export default CarScreen