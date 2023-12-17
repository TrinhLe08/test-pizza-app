import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { ProductApi } from '../../../apis/product-api';
import { recoilProduct } from '../../../recoil/product.recoil';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';

const ProductPage = () => {
    const [allProduct, setAllProduct] = useState([])
    const [valueProduct, setValueProduct] = useRecoilState(recoilProduct.informationToUpdateProduct)
    const [_, setRouter] = useRecoilState(recoilRouter.router)

    useEffect(() => {
        const dataAllProduct = async () => { 
            try {
              const allProduct = await ProductApi.allProduct()
              setAllProduct(allProduct.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllProduct()
    }, [])

    const DeleteProduct = async (ProductId) => {
      try {
        await ProductApi.deleteProduct(ProductId)
        const allProduct = await ProductApi.allProduct()
        setAllProduct(allProduct.data)
      } catch (e) {
        console.log(e);
        return
      }
    }

    return (
        <View style = {styles.container}>
          <View style={styles.itemHeader}>
            <Text>Product list :</Text>
              <TouchableOpacity  onPress={() => setRouter('create-products')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Price</Text>
               <Text style={styles.contentDescription}>Size</Text>
               <Text style={styles.contentDescription}>Crust</Text>
           </View>
          <FlatList
               data={[
  {
    _id: '1',
    name: 'Pizza A',
    base_price: 10.99,
    options: {
      size: {
        name: 'Large'
      }
    },
    crusts: {
      crusts: {
        name: 'Thin Crust'
      }
    }
  },
  {
    _id: '2',
    name: 'Pizza B',
    base_price: 12.99,
    options: {
      size: {
        name: 'Medium'
      }
    },
    crusts: {
      crusts: {
        name: 'Thick Crust'
      }
    }
  },
]
}
               style={{marginBottom: 600}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row',}} >
                 <TouchableOpacity onPress={() => {
                  setRouter('update-products')
                   setValueProduct(item)
                   return
                 }
                }>
                   <View style={styles.itemData}>
                       <Text style={styles.contentName}>{item.name}</Text>
                       <Text style={styles.contentDescription}>{item.base_price}</Text>
                       <Text style={styles.contentDescription}>{item.options.size.name}</Text>
                       <Text style={styles.contentDescription}>{item.crusts.crusts.name}</Text>
                   </View>
                 </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteProduct(item._id)}>Delete</Text>
               </TouchableOpacity>
            </View>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
  },
  itemHeader : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
 itemData: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
   itemMenu: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
  },
  contentName: {
    width: 70,
  },
  contentDescription: {
    width: 110,
  },
});

export default ProductPage