import React from "react";
function rideScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Choose Ride</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  export default rideScreen