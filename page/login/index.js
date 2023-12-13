import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '../../apis/login-api';
import { usersApi } from '../../apis/user-api';

const LoginPage = () => {
  const [userName, setUserName]= useState('');
  const [userPassword, setUserPassword] = useState('');
  const [myInformation, setMyInformation] = useState({})

  const loginUser = async () => {
   try {
    if (userName === '' || userPassword === '' ){
     console.log('Not enough information');
     return
    } else {
      const informationUser = {
       userName : userName, userPassword : userPassword, rememberMe : false
      }
      const Login = await loginApi.logiUsers(informationUser)
      console.log(Login);
      if (Login.data.authorization) {
        await AsyncStorage.setItem('authorization', Login.data.authorization);
        const myInformation = await usersApi.myInformation()
        setMyInformation(myInformation.data)
      } else {
        return
      }
    }
  } catch (err) {
    console.log(err);
    return
  }
  }
  return (
    <View style={styles.container}>
    <View  style={styles.main}>
         <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/208/325/non_2x/hand-drawn-pizza-doodle-free-vector.jpg' }} // Đường dẫn URL tới hình ảnh trên mạng
        style={{ width: 100, height: 100}}
      />
      <Text >
        WELCOME
      </Text>
       <TextInput
          style={styles.input}
          onChangeText={(text) => setUserName(text)}
          placeholder="Username"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserPassword(text)}
          placeholder="Password"
          secureTextEntry
        />
     <TouchableOpacity onPress={() => loginUser()}>
      <Text style ={{textDecorationLine: 'underline'}}>Login</Text>
     </TouchableOpacity>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  main : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  }
});

export default LoginPage;
