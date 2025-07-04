import './App.sass';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Pages/Layout/Layout';
import { HeaderPage } from './Pages/HeaderPage/HeaderPage';
import { Favorites } from './Pages/Favorites/Favorites';
import { ProductItem } from './Pages/ProductItem/ProductItem';
import { Authorization } from './Pages/Authorization/Authorization';
import { CreateOrder } from './Pages/CreateOrder/CreateOrder';
import { UserInfo } from './Pages/UserInfo/UserInfo';
import { Error } from './Pages/Error/Error';

import { AppRoutes } from './types/types';


export const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route index element={<HeaderPage />} />
        <Route path={AppRoutes.FAVORITES} element={<Favorites />} />
        <Route path={AppRoutes.PRODUCT} element={<ProductItem />} />
        <Route path={AppRoutes.LOGIN} element={<Authorization />} />
        <Route path={AppRoutes.CREATE_ORDER} element={<CreateOrder />} />
        <Route path={AppRoutes.ACCOUNT} element={<UserInfo />} />
        <Route path={AppRoutes.NOT_FOUND} element={<Error />} />
      </Route>
    </Routes>
  );
};
