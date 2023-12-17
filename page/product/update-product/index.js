import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilProduct } from '../../../recoil/product.recoil';
// import { ProductApi } from '../../../apis/Product-api';
import { recoilRouter } from '../../../recoil/router.recoil';

const UpdateProductPage = () => {
  const [_,setRouter] = useRecoilState(recoilRouter.router)
const valueProduct = useRecoilValue(recoilProduct.informationToUpdateProduct)
const [name, setName] = useState('Seafood Pizza');
const [name_vi, setName_vi] = useState('Pizza Hải Sản');
const [slug, setSlug] = useState('seafood-pizza');
const [imagePath, setImagePath] = useState('');
const [description, setDescription] = useState('seafood, mushroom');
const [description_vi, setDescription_vi] = useState('Mô tả của thể loại');
const [basePrice, setBasePrice] = useState(100000);
const [salePercent, setSalePercent] = useState(10);
const [metaTitle, setMetaTitle] = useState('Seafood Pizza');
const [metaDescription, setMetaDescription] = useState('This is the meta description of the product');
const [metaKeywords, setMetaKeywords] = useState('This is the meta keywords of the product');
const [active, setActive] = useState(true);
  const handleChangeUpdate = async () => {
    const dataToUpdate = { slug, name, name_vi,
       description, description_vi, base_price : basePrice, 
       active: true, sale_percent: salePercent, meta_title: metaTitle, 
       meta_description: metaDescription, meta_keywords: metaKeywords, 
       options: valueProduct.options};
    console.log(dataToUpdate);
    try {
      const update = await ProductApi.updateProduct(dataToUpdate)
      console.log(update);
      setInformationProduct(update.data)
    } catch (err) {
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => setRouter('products-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
       <Text style={{fontSize: 25}}>Update products:</Text>
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
        value={name_vi}
        onChangeText={(text) => setName_vi(text)}
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
      
      <Text style={styles.label}>Description V:</Text>
      <TextInput
        style={styles.input}
        value={description_vi}
        onChangeText={(text) => setDescription_v(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Base price:</Text>
      <TextInput
        style={styles.input}
        value={basePrice}
        onChangeText={(text) => setBasePrice(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Sale percent:</Text>
      <TextInput
        style={styles.input}
        value={salePercent}
        onChangeText={(text) => setSalePercent(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Meta Description:</Text>
      <TextInput
        style={styles.input}
        value={metaDescription}
        onChangeText={(text) => setMetaDescription(text)}
        placeholder="Enter your address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Meta Keywords:</Text>
      <TextInput
        style={styles.input}
        value={metaKeywords}
        onChangeText={(text) => setMetaKeywords(text)}
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


export default UpdateProductPage