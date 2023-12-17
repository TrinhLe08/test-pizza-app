import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { ProductApi } from '../../../apis/product-api';
import { recoilRouter } from '../../../recoil/router.recoil';

const CreateProductPage = () => {
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
const [_, setRouter] = useRecoilState(recoilRouter.router)

  const createProduct = async () => {
    const informationToCreateProduct = {
 name,
 name_vi,
 slug,
 image_path: "",
 description,
 description_vi,
 base_price: basePrice,
 sale_percent: salePercent,
 meta_title: metaTitle,
 meta_description: metaDescription,
 meta_keywords: metaKeywords,
 active: true,
 category: "656407dd6909198ca9ba7a",
 discount: "656407dd6909198ca9ba7a93",
 options: [
   {
     size:  {
       name: "Medium (24cm)",
       name: "Trung bình",
       value: "medium",
       description: "",
       description_vi: "",
       image_path: "",
       active: true,
       order_by: "0"
     },
     price_increment: 0,
     is_sale_percent_active: true,
     crusts: [
       {
         crust: {
           _id: "656407dd6909198ca9ba7a",
           name: "Thin",
           name_vi: "Đế ké mỏng",
           value: "thin-crust",
           description: "",
           description_vi: "",
           image_path: "",
           active: true,
           order_by: "0"
         },
         price_increment: 0
       }
     ],
     topings: [
       {
         topping: {
           id: "656407dd6909198ca9ba7a93",
           name: "Extra cheese",
           name_vi: " phô mai",
           value: "extra-cheese",
           description_vi: "",
           image_path: "",
           active: true,
           order_by: "0"
         },
         price_increment: 10000
       }
     ]
   }
 ]
};
    console.log(informationToCreateProduct);
    try {
        const create = await ProductApi.createProduct(informationToCreateProduct)
        console.log(create);
        return
    } catch (err) {
        console.log(err);
        return
    }
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => setRouter('products-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create products :</Text>
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
          value={name_vi}
          onChangeText={text => setName_vi(text)}
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
          value={description_vi}
          onChangeText={text => setDescription_vi(text)}
          secureTextEntry
        />
      </View>
      <Button title="Save" onPress={() => createProduct()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
    // marginLeft: 100,
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

export default CreateProductPage