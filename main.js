import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { recoilRouter } from './recoil/router.recoil';
import LoginPage from './page/login';
import UserListPage from './page/user/users-list';
import CreateUserPage from './page/user/create-user';
import UpdateUserPage from './page/user/update-user';
import CategoriesPage from './page/categories/categories-list';
import CreateCategoriesPage from './page/categories/create-categories';
import UpdateCategoriesPage from './page/categories/update-categories';
import ToppingsPage from './page/topping/topping-list';
import CreateToppingsPage from './page/topping/create-topping';
import UpdateToppingsPage from './page/topping/update-topping';
import SizesPage from './page/size/size-list';
import CreateSizesPage from './page/size/create-size';
import UpdateSizesPage from './page/size/update-size';
import CrustsPage from './page/crusts/crusts-list';
import CreateCrustsPage from './page/crusts/create-crusts';
import UpdateCrustsPage from './page/crusts/update-crusts';
import ProductPage from './page/product/product-list'

export default function Main() {
  const router = useRecoilValue(recoilRouter.router)
  return (
    <View style={styles.container}>
      {router === '' && <LoginPage />} 

      {router === 'users-list' && <UserListPage />}
      {router === 'create-user' && <CreateUserPage />}
      {router === 'update-user' && <UpdateUserPage />}

      {router === 'categories-list' && <CategoriesPage />}
      {router === 'create-categories' && <CreateCategoriesPage />}
      {router === 'update-categories' && <UpdateCategoriesPage />}

      {router === 'topping-list' && <ToppingsPage />}
      {router === 'create-topping' && <CreateToppingsPage />}
      {router === 'update-topping' && <UpdateToppingsPage />}
      
      {router === 'size-list' && <SizesPage />}
      {router === 'create-size' && <CreateSizesPage />}
      {router === 'update-size' && <UpdateSizesPage />}

      {router === 'crusts-list' && <CrustsPage />}
      {router === 'create-crusts' && <CreateCrustsPage />}
      {router === 'update-crusts' && <UpdateCrustsPage />}

      {router === 'products-list' && <ProductPage />}
      {router === 'create-products' && <CreateProductPage />}
      {router === 'update-products' && <UpdateProductPage />}
    </View>
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



