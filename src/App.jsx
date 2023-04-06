import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import Layout from "./Layout/layout";
import AdminLayout from "./Layout/adminLayout/AdminLayout";
import PrivateLayout from "./Layout/privateLayout";
import NotFound from "./page/notFound";
import Loader from "./utiliti/loader";
import Slug from "./utiliti/slug/slug";
//
import ClientLayout from "./Layout/ClientLayout";
import AccountLayout from "./Layout/LayoutAccount";
import DetailProduct from "./page/Detail";
import CheckoutCart from "./page/checkout-cart";
import PagePay from "./page/pay/index"
//
const AdminPage = React.lazy(() => import("./page/Admin/home/AdminPage"));
const PublishingList = React.lazy(() => import("./page/Admin/publishingList"));
const CategoryList = React.lazy(() => import("./page/Admin/categoryList"));
const ProductList = React.lazy(() => import("./page/Admin/ProductList"));
const ProfileAdmin = React.lazy(() =>
  import("./page/Admin/Profile/Profile.admin")
);
//
const ProfileAddress = React.lazy(() => import("./page/Profile-Address"));
const ProfileInfo = React.lazy(() => import("./page/Profile-Info"));
const ProfileMyProduct = React.lazy(() => import("./page/Profile-MyProduct"));
const ProfileNotification = React.lazy(() =>
  import("./page/Profile-Notification")
);
const ProfileVoucher = React.lazy(() => import("./page/Profile-Voucher"));
const HomePage = React.lazy(() => import("./page/home"));
const Blog = React.lazy(() => import("./page/blog"));
const Profile = React.lazy(() => import("./page/profile"));
const WishList = React.lazy(() => import("./page/wishList"));
const OrderSearch = React.lazy(() => import("./page/orderSearch"));
const Login = React.lazy(() => import("./page/auth/login"));
const Register = React.lazy(() => import("./page/auth/register"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="profile" element={<Profile />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="/detail/:id" element={<DetailProduct />} />
              <Route path="/checkout" element={<CheckoutCart />} />
              <Route path="/pay" element={<PagePay />} />
              <Route path="/" element={<AccountLayout />}>
                <Route index path="account/edit" element={<ProfileInfo />} />
                <Route path="account/address" element={<ProfileAddress />} />
                <Route path="account/order" element={<ProfileMyProduct />} />
                <Route path="account/voucher" element={<ProfileVoucher />} />
                <Route
                  path="account/notification"
                  element={<ProfileNotification />}
                />
              </Route>
            </Route>
            {/* <Route path="/orderSearch" element={<OrderSearch />} /> */}
            <Route
              path={Slug("quyển sách này thật tuyệt")}
              element={<OrderSearch />}
            />
            {/* <Route path="/paycart" element={<PayCart />} /> */}
          </Route>
          {/* Router Admin */}
          <Route
            path="admin/"
            element={
              <PrivateLayout>
                <AdminLayout />
              </PrivateLayout>
            }
          >
            <Route index element={<AdminPage />} />
            <Route path="publishs" element={<PublishingList />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="products" element={<ProductList />} />
            <Route path="profile" element={<ProfileAdmin />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
