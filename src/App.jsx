
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

import AdminLayout from './Layout/AdminLayout';
import AdminPage from './page/Admin/home/AdminPage';
import NotFound from "./page/notFound";
import ShopCart from "./page/cart/shop_cart";
import NewProduct from './page/Admin/newProduct/NewProduct';
import NewUser from './page/Admin/newUser/NewUser';
import Product from './page/Admin/product/Product';
import ProductList from './page/Admin/productList/ProductList';
import User from './page/Admin/user/User';
import UserList from './page/Admin/userList/UserList';
import PrivateLayout from "./Layout/privateLayout";
import Layout from "./Layout/layout";
import PayCart from "./page/payCart/payCart";
import React from "react";
import ClientLayout from "./Layout/ClientLayout";


import Loader from "./utiliti/loader";
import Slug from "./utiliti/slug/slug";
const HomePage = React.lazy(() => import('./page/home'));
const Blog = React.lazy(() => import('./page/blog'));
const Profile = React.lazy(() => import('./page/profile'));
const WishList = React.lazy(() => import('./page/wishList'));
const OrderSearch = React.lazy(() => import('./page/orderSearch'));
const Login = React.lazy(() => import('./page/auth/login'));
const Register = React.lazy(() => import('./page/auth/register'));

function App() {
    return <div className="App">
    <React.Suspense fallback={<Loader />}>
        <Routes>
                <Route 
                    path="/"
                    element={
                        <PrivateLayout>
                            <Layout/>
                        </PrivateLayout>}
                >
                    <Route path='/' element={<ClientLayout />}>
                        <Route index element={<Navigate to ="/home"/>} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/wishlist" element={<WishList />} />
                        {/* <Route path="/orderSearch" element={<OrderSearch />} /> */}
                        <Route path={Slug("quyển sách này thật tuyệt")} element={<OrderSearch />} />
                        {/* <Route path="/paycart" element={<PayCart />} /> */}
                    </Route>

                    {/* Router Admin */}
                    <Route path='/admin' element={<AdminLayout />}>
                        <Route index element={<AdminPage />} />
                        <Route path='users' element={<UserList />} />
                        <Route path='user/:userId' element={<User />} />
                        <Route path='newUser' element={<NewUser />} />
                        <Route path='products' element={<ProductList />} />
                        <Route path='product/:productId' element={<Product />} />
                        <Route path='newproduct' element={<NewProduct />} />
                    </Route>
                </Route>
                {/*  */}
        
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
        </Routes>
            </React.Suspense>

    </div>;

}

export default App;
