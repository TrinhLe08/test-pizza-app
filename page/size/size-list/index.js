import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { SizesApi } from '../../../apis/size-api';

const SizesPage = () => {
    const [allSizes, setAllSizes] = useState([])
    useEffect(() => {
        const dataAllSizes = async () => { 
            try {
              const allSizes = await SizesApi.allSizes()
              setAllSizes(allSizes.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllSizes()
    }, [])

    const DeleteSizes = async (SizesId) => {
      try {
        await SizesApi.deleteSizes(SizesId)
        const allSizes = await SizesApi.allSizes()
        setAllSizes(allSizes.data)
      } catch (e) {
        console.log(e);
        return
      }
    }

    return (
        <View style = {styles.container}>
          <View style={styles.itemHeader}>
            <Text>Sizes list :</Text>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Value</Text>
           </View>
          <FlatList
               data={allSizes}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
            <View style={styles.itemData}>
              <Text style={styles.contentName}>{item.name}</Text>
              <Text style={styles.contentDescription}>{item.slug}</Text>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteSizes(item._id)}>Delete</Text>
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

export default SizesPage