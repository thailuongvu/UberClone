import React from "react";

function homeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ride</Text>
        <Button title="Go ride" onPress={() => navigation.navigate('rideScreen')} />
        <Button title='Go Car'>

        </Button>
      </View>
    );
  }
  export default homeScreen