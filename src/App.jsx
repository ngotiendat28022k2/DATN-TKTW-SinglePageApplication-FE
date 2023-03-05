import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./Layout/adminLayout/AdminLayout";
import AdminPage from "./page/Admin/home/AdminPage";
import Home from "./page/home";
import NotFound from "./page/notFound";

import ShopCart from "./page/cart/shop_cart";

import NewEmployees from "./page/Admin/newEmployees/";
import EmployeesList from "./page/Admin/EmployeesList";
import NewUser from "./page/Admin/newUser/NewUser";
import User from "./page/Admin/user/User";
import UserList from "./page/Admin/userList/UserList";
import PrivateLayout from "./Layout/privateLayout";
import Layout from "./Layout/layout";
import PayCart from "./page/payCart/payCart";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import BLOG from "./page/blog";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" 


            element={
                <PrivateLayout>
                    <Layout/>
                </PrivateLayout>
            }>
                <Route index element={<Navigate to ="/"/>} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BLOG />} />
        {/* </Route> */}
        {/*  */}

        {/* Router Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="employees" element={<EmployeesList />} />
          <Route path="newEmployees" element={<NewEmployees />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
