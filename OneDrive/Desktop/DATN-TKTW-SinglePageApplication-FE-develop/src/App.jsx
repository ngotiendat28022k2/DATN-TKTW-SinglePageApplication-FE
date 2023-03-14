
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify";
import './App.css';
import AdminLayout from './Layout/AdminLayout';
import AdminPage from './page/Admin/home/AdminPage';
import HomePage from './page/home/index'
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
import Login from './page/auth/login';
import Register from './page/auth/register';
import Blog from "./page/blog";
import Profile from "./page/profile";
import OrderSearch from "./page/orderSearch";
import WishList from "./page/wishList";
import Loader from "./utiliti/loader";
import React from "react";
import ClientLayout from "./Layout/ClientLayout";
import "./utiliti/toast/Toast"
const Home = React.lazy(() => import('./page/home'));

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
                        <Route path="/home" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/wishlist" element={<WishList />} />
                        <Route path="/orderSearch" element={<OrderSearch />} />
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