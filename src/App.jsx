import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import Layout from "./Layout/layout";
import AdminLayout from "./Layout/adminLayout/AdminLayout";
import PrivateLayout from "./Layout/privateLayout";
import NotFound from "./page/notFound";

import ClientLayout from "./Layout/ClientLayout";
import AccountLayout from "./Layout/LayoutAccount"

import Loader from "./utiliti/loader";
import Slug from "./utiliti/slug/slug";
//

const AdminPage = React.lazy(() => import('./page/Admin/home/AdminPage'));
const NewProduct = React.lazy(() => import('./page/Admin/newEmployees'));
const ProductList = React.lazy(() => import('./page/Admin/EmployeesList'));
const NewUser = React.lazy(() => import('./page/Admin/newUser/NewUser'));
const User = React.lazy(() => import('./page/Admin/user/User'));
const UserList = React.lazy(() => import('./page/Admin/userList/UserList'));
// 
const ProfileAddress = React.lazy(() => import('./page/Profile-Address'));
const ProfileInfo = React.lazy(() => import('./page/Profile-Info'));
const ProfileMyProduct = React.lazy(() => import('./page/Profile-MyProduct'));
const ProfileNotification = React.lazy(() => import('./page/Profile-Notification'));
const ProfileVoucher = React.lazy(() => import('./page/Profile-Voucher'));
const HomePage = React.lazy(() => import('./page/home'));
const Blog = React.lazy(() => import('./page/blog'));
const Profile = React.lazy(() => import('./page/profile'));
const WishList = React.lazy(() => import('./page/wishList'));
const OrderSearch = React.lazy(() => import('./page/orderSearch'));
const Login = React.lazy(() => import('./page/auth/login'));
const Register = React.lazy(() => import('./page/auth/register'));

function App() {
  return (
    <div className="App">
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
                        <Route index element={<Navigate to ="home"/>} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="profile123" element={<Profile />} />
                        <Route path="wishlist" element={<WishList />} />

                        <Route path="/" element={<AccountLayout />} >
                            <Route index path="account/edit" element={<ProfileInfo />} />
                            <Route path="account/address" element={<ProfileAddress />} />
                            <Route path="account/order" element={<ProfileMyProduct />} />
                            <Route path="account/voucher" element={<ProfileVoucher />} />
                            <Route path="account/notification" element={<ProfileNotification />} />
                        </Route>

                        {/* <Route path="/orderSearch" element={<OrderSearch />} /> */}
                        <Route path={Slug("quyển sách này thật tuyệt")} element={<OrderSearch />} />
                        {/* <Route path="/paycart" element={<PayCart />} /> */}
                    </Route>

                    {/* Router Admin */}
                    <Route path='admin/' element={<AdminLayout />}>
                        <Route index element={<AdminPage />} />
                        <Route path='users' element={<UserList />} />
                        <Route path='user/:userId' element={<User />} />
                        <Route path='newUser' element={<NewUser />} />
                        <Route path='products' element={<ProductList />} />
                        {/* <Route path='product/:productId' element={<Product />} /> */}
                        <Route path='newproduct' element={<NewProduct />} />
                    </Route>
                </Route>
                {/*  */}
        
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
