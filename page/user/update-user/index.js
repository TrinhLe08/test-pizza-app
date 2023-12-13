import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { usersApi } from '../../../apis/user-api';

const UpdateUserPage = () => {
  const [name, setName] = useState('John Doe');
  const [birthday, setBirthday] = useState('01/01/2000');
  const [address, setAddress] = useState('123 Nguyen Van Linh Street');
  const [mobile, setMobile] = useState('0912345678');
  const [ward, setWard] = useState('Ward 13');
  const [district, setDistrict] = useState('District 1');
  const [city, setCity] = useState('Ho Chi Minh City');
  const [password, setPassword] = useState('********');
  const [amount, setAmount] = useState('100000');

  // test state 
  const [informationUser, setInformationUser] = useState({})

  const handleChangeInfo = async () => {
    const dataToUpdate = { name, birthday, address, mobile, district, ward, city };
    try {
      const update = await usersApi.updateUsers(dataToUpdate)
      console.log(update);
      setInformationUser(update.data)
    } catch (err) {
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
       <Text style={{fontSize: 25}}>Update user:</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
        placeholder="MM/DD/YYYY"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />
      
      <Text style={styles.label}>City :</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Ward:</Text>
      <TextInput
        style={styles.input}
        value={ward}
        onChangeText={(text) => setWard(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>District :</Text>
      <TextInput
        style={styles.input}
        value={district}
        onChangeText={(text) => setDistrict(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        placeholder="Enter your phone number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={(text) => setAmount(text)}
        placeholder="Enter your amount"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.changeInfoButton} onPress={handleChangeInfo}>
        <Text style={styles.buttonText}>Change Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    width: 400,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  changeImageButton: {
    position: 'absolute',
    // top:2,
    bottom: -5,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    // marginLeft:100
  },
  changeImageIcon: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'flex-start',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  changeInfoButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


export default UpdateUserPage