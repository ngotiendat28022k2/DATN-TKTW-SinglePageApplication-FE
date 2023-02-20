import { Route, Routes } from "react-router-dom";
import './App.css';
import AdminLayout from './Layout/AdminLayout';
import AdminPage from './page/Admin/home/AdminPage';
import Home from "./page/home";
import NotFound from "./page/notFound";
import NewProduct from './page/Admin/newProduct/NewProduct';
import NewUser from './page/Admin/newUser/NewUser';
import Product from './page/Admin/product/Product';
import ProductList from './page/Admin/productList/ProductList';
import User from './page/Admin/user/User';
import UserList from './page/Admin/userList/UserList';
import PrivateLayout from "./Layout/privateLayout";
import Layout from "./Layout/layout";
import Login from './page/auth/login';
import Register from './page/auth/register';



function App() {
    return <div className="App">
        <Routes>
            {/* <Route path="/" 
            element={
                <PrivateLayout>
                    <Layout/>
                </PrivateLayout>
            }>
                <Route index element={<Navigate to ="/"/>} /> */}
            <Route path="/" element={<Home />} />
            {/* </Route> */}
            {/*  */}

            
            {/* Router Admin */}
            <Route path='/admin' element={<AdminLayout/>}>
                <Route index element={<AdminPage/>}/>
                <Route path='users' element={<UserList />}/>
                <Route path='user/:userId' element={<User/>}/>
                <Route path='newUser' element={<NewUser/>}/>
                <Route path='products' element={<ProductList/>}/>
                <Route path='product/:productId' element={<Product />}/>
                <Route path='newproduct' element={<NewProduct />}/>
            </Route>
            <Route path="*" element={ <NotFound /> }/>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

        </Routes>

    </div>;
}

export default App
