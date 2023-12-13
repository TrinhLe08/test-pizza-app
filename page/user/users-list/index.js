import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { usersApi } from '../../../apis/user-api';
import { recoilUser } from '../../../recoil/user.recoil';

const UserListPage = () => {
    const [allUser, setAllUser] = useState([])
    const [dataUser, setDataUser] = useRecoilState(recoilUser.informationToUpdateUser)
    useEffect(() => {
        const dataAllUser = async () => { 
            try {
              const allUser = await usersApi.allUser()
              setAllUser(allUser.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllUser()
    }, [])

    const DeleteUser = async (userId) => {
      try {
        await usersApi.deleteUser(userId)
        const allUser = await usersApi.allUser()
        setAllUser(allUser.data)
      } catch (e) {
        console.log(e);
        return
      }
    }

    return (
        <View style = {styles.container}>
          <View style={styles.itemHeader}>
            <Text>User list : </Text>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentEmail}>Email</Text>
               <Text style={styles.contentMobile}>Phone</Text>
           </View>
          <FlatList
               data={allUser}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'row',}} >  

            <TouchableOpacity onPress={() => {
                 setDataUser(item);
                 console.log(dataUser);
               }}>
                        <View style={styles.itemData}>
                          <Text style={styles.contentName}>{item.name}</Text>
                          <Text style={styles.contentEmail}>{item.email}</Text>
                          <Text style={styles.contentMobile}>{item.mobile}</Text>
                        </View>
                       </TouchableOpacity>
                <Text style={{textDecorationLine: 'underline', marginLeft: 10, color: 'red', paddingTop: 15}} onPress={() => DeleteUser(item._id)}>Delete</Text>
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
  contentEmail: {
    width: 110,
  },
  contentMobile: {
     width: 80,
  }
});

export default UserListPage