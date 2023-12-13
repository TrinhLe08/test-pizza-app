import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { categoriesApi } from '../../../apis/categories-api';

const UpdateCategoriesPage = () => {
  const [slug, setSlug] = useState('sweet-soup');
  const [name, setName] = useState('Sweet Soup');
  const [name_v, setName_v] = useState('Chè');
  const [description, setDescription] = useState('This is the description of the category');
  const [description_v, setDescription_v] = useState('Mô tả của thể loại');
  const [order_by, setorder_by] = useState(0);
  const [informationUser, setInformationCategories] = useState({})

  const handleChangeUpdate = async () => {
    const dataToUpdate = { slug, name, name_v, description, description_v, order_by, active: true };
    console.log(dataToUpdate);
    try {
      const update = await categoriesApi.updateCategories(dataToUpdate)
      console.log(update);
      setInformationCategories(update.data)
    } catch (err) {
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
       <Text style={{fontSize: 25}}>Update categories:</Text>
             <Text style={styles.label}>Slug:</Text>
      <TextInput
        style={styles.input}
        value={slug}
        onChangeText={(text) => setSlug(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

            <Text style={styles.label}>Name Vi:</Text>
      <TextInput
        style={styles.input}
        value={name_v}
        onChangeText={(text) => setName_v(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />
      
      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={styles.input}
        value={description_v}
        onChangeText={(text) => setDescription_v(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Order by:</Text>
      <TextInput
        style={styles.input}
        value={order_by}
        onChangeText={(text) => setorder_by(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.changeInfoButton} onPress={handleChangeUpdate}>
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


export default UpdateCategoriesPage