import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { CrustsApi } from '../../../apis/crust-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';

const CrustsPage = () => {
    const [allCrusts, setAllCrusts] = useState([])
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    useEffect(() => {
        const dataAllCrusts = async () => { 
            try {
              const allCrusts = await CrustsApi.allCrusts()
              setAllCrusts(allCrusts.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllCrusts()
    }, [])

    const DeleteCrusts = async (CrustsId) => {
      try {
        await CrustsApi.deleteCrusts(CrustsId)
        const allCrusts = await CrustsApi.allCrusts()
        setAllCrusts(allCrusts.data)
      } catch (e) {
        console.log(e);
        return
      }
    }

    return (
        <View style = {styles.container}>
          <View style={styles.itemHeader}>
            <Text>Crusts list :</Text>
              <TouchableOpacity  onPress={() => setRouter('create-crusts')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Value</Text>
           </View>
          <FlatList
               data={allCrusts}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row',}} >
                   <TouchableOpacity onPress={() => setRouter('update-crusts')}>
                    <View style={styles.itemData}  >
              <Text style={styles.contentName}>{item.name}</Text>
              <Text style={styles.contentDescription}>{item.value}</Text>
                    </View>
                   </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteCrusts(item._id)}>Delete</Text>
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

export default CrustsPage