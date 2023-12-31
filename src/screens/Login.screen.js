<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, Alert, TouchableOpacity} from "react-native";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import Separator from "../components/separators";
function Login({navigation}) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
=======
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'
function Login({ navigation }) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
>>>>>>> c851248d059a5b459bf08e30b6b59647e5e26447

  const { isLoading, login } = useContext(AuthContext)
  const setData = () => {
    if (phone.length == 0 || password.length == 0) {
      Alert.alert('Error!', 'Your information is not invalid')
    } else {
      login(phone, password)
    }
<<<<<<< HEAD
    return ( 
        <View style={styles.body}>
        <Spinner visible={isLoading}/>
            <Image
                style={styles.logo}
                source={require('../../assets/logo/logo.png')}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone number"
                onChangeText={(value)=>{setPhone(value)}}
            />
             <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                onChangeText={(value)=>{setPassword(value)}}
            />
            <Button
                style={{marginTop: 20, width: 330, height: 50, backgroundColor: '#333', marginLeft: 8, borderRadius: 10}}
                title='LOGIN'
                onPressFunction={setData}
                color='#fff'
            />
             <Separator/>
            <View style={{flexDirection: 'row', marginTop: 20}} >
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={{color: '#347deb'}}>Register</Text>
                </TouchableOpacity>
            </View>
           
        </View>
        
     );
=======
  }
  return (
    <View style={styles.body}>
      <Spinner visible={isLoading} />
      <Image style={styles.logo} source={require('../../assets/logo/logo.png')} />
      <TextInput
        style={styles.input}
        placeholder='Phone number'
        onChangeText={(value) => {
          setPhone(value)
        }}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Password'
        onChangeText={(value) => {
          setPassword(value)
        }}
      />
      <Button title='Login' color='#33CCFF' onPressFunction={setData} />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register')
          }}
        >
          <Text style={{ color: '#347deb' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
>>>>>>> c851248d059a5b459bf08e30b6b59647e5e26447
}

export default Login

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 180,
    height: 180,
    margin: 20,
    marginBottom: 50,
    marginTop: 150
  },
  text: {
    fontSize: 30,
    color: '#333'
  },
  input: {
    borderRadius: 20,
    marginBottom: 10,
    borderColor: '#555',
    fontSize: 20,
    backgroundColor: '#fff',
    textAlign: 'auto',
    width: 330,
    borderWidth: 1,
    height: 60,
    padding: 20
  }
})
