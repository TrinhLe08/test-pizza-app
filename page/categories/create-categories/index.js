import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { categoriesApi } from '../../../apis/categories-api';
import { recoilRouter } from '../../../recoil/router.recoil';

const CreateCategoriesPage = () => {
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [name_v, setName_v] = useState('');
  const [description, setDescription] = useState('');
  const [description_v, setDescription_v] = useState('');
  const [_, setRouter] = useRecoilState(recoilRouter.router)

  const createCategories = async () => {
    const informationToCreateCategories = {
        slug, name, name_v, description, description_v, active: true, order_by: '0',
    }
    console.log(informationToCreateCategories);
    try {
        const create = await categoriesApi.createCategories(informationToCreateCategories)
        console.log(create);
        return
    } catch (err) {
        console.log(err);
        return
    }
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => setRouter('categories-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create categories :</Text>
           <View>
        <Text>Slug:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setSlug(text)}
        />
      </View>
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
       <View>
        <Text>Name Vi:</Text>
        <TextInput
          style={styles.input}
          value={name_v}
          onChangeText={text => setName_v(text)}
        />
      </View>
      <View>
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
          secureTextEntry
        />
      </View>
     <View>
        <Text>Description Vi:</Text>
        <TextInput
          style={styles.input}
          value={description_v}
          onChangeText={text => setDescription_v(text)}
          secureTextEntry
        />
      </View>
      <Button title="Save" onPress={() => createCategories()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
    flex: 1,
    flexDirection: 'column',
    marginTop: 100,
    flexWrap: 'wrap',
    gap: 10,
    },
    input:{
        width: 200,
         height: 25, 
         borderColor: 'gray', 
         borderWidth: 1, 
         borderRadius: 5 
        }
})

export default CreateCategoriesPage