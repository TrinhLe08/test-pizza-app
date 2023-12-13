import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import LoginPage from './page/login';
import UserListPage from './page/user/users-list';
import CreateUserPage from './page/user/create-user';
import UpdateUserPage from './page/user/update-user';
import CategoriesPage from './page/categories/categories-list';
import CreateCategoriesPage from './page/categories/create-categories';
import UpdateCategoriesPage from './page/categories/update-categories';
import CreateToppingsPage from './page/topping/create-topping';

export default function App() {
  return (
    <RecoilRoot>
    <View style={styles.container}>
      <CreateToppingsPage/>
    </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
