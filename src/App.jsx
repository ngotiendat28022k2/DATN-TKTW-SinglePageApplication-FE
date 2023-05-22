import { Navigate, Route, Routes, useLocation } from "react-router-dom";

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
import CheckoutCart from "./page/checkout-cart";
//
import AdminPage from "./page/Admin/home/AdminPage";
import ProductList from "./page/Admin/ProductList";
import PublishList from "./page/Admin/publishingList";
import CategoryList from "./page/Admin/categoryList";
import SupplierList from "./page/Admin/supplieresList";
import AuthorList from "./page/Admin/authorList";
import UserList from "./page/Admin/userList";
import UserRootList from "./page/Admin/userRootList";
import DealHot from "./page/DealHot/DealHot";
import SeriesBook from "./page/SeriesBook/SeriesBook";
import InfomationPage from "./page/Admin/infomation_page";
import CategoryInfomation from "./page/Admin/category_information";
import Voucher from "./page/Admin/voucherList";
import ChatBox from "./components/chatbot";
import { ChatBubbleOutline } from "@mui/icons-material";
import ReportList from "./page/Admin/reportCommentList";
import CommentList from "./page/Admin/commentList";
import ProductSeries from "./page/Admin/prductseries";

const DynamicPage = React.lazy(() => import("./page/dynamicPage/DynamicPage"));
const ProfileAdmin = React.lazy(() =>
    import("./page/Admin/Profile/Profile.admin")
);
const ProfileAddress = React.lazy(() =>
    import("./page/profile/Profile-Address")
);
const ProfileInfo = React.lazy(() => import("./page/profile/Profile-Info"));
const ProfileMyProduct = React.lazy(() =>
    import("./page/profile/Profile-MyProduct")
);
const ProfileNotification = React.lazy(() =>
    import("./page/profile/Profile-Notification")
);
const ProfileVoucher = React.lazy(() =>
    import("./page/profile/Profile-Voucher")
);
const HomePage = React.lazy(() => import("./page/home"));
const DetailProduct = React.lazy(() => import("./page/Detail"));
const Blog = React.lazy(() => import("./page/blog"));
const Login = React.lazy(() => import("./page/auth/login"));
const Register = React.lazy(() => import("./page/auth/register"));
const PageSearch = React.lazy(() => import("./page/pageSearch"));
const PagePay = React.lazy(() => import("./page/pay/index"));

function App() {
    const location = useLocation();
    const isLayoutRoute =
        location.pathname !== "/admin" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "*";
    return (
        <div className="App">
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<ClientLayout />}>
                            <Route index element={<Navigate to="home" />} />
                            <Route path="home" element={<HomePage />} />
                            <Route path="blog" element={<Blog />} />
                            <Route
                                path="infomation-page/:id"
                                element={<DynamicPage />}
                            />
                            {/* Test */}
                            <Route path="deal-hot/:id" element={<DealHot />} />
                            <Route
                                path="series-book/:id"
                                element={<SeriesBook />}
                            />
                            <Route
                                path="/detail/:id"
                                element={<DetailProduct />}
                            />
                            <Route
                                path="/checkout/cart"
                                element={<CheckoutCart />}
                            />
                            <Route path="/pay" element={<PagePay />} />
                            <Route path="/search" element={<PageSearch />} />
                            <Route path="/" element={<AccountLayout />}>
                                <Route
                                    index
                                    path="account/edit/:id"
                                    element={<ProfileInfo />}
                                />
                                <Route
                                    path="account/address/:id"
                                    element={<ProfileAddress />}
                                />
                                <Route
                                    path="account/order/:id"
                                    element={<ProfileMyProduct />}
                                />

                                <Route
                                    path="account/voucher"
                                    element={<ProfileVoucher />}
                                />
                                <Route
                                    path="account/notification"
                                    element={<ProfileNotification />}
                                />
                            </Route>
                            {/* <Route
                                path="/series-book"
                                element={<SeriesBook />}
                            /> */}
                            {/* <Route path="/paycart" element={<PayCart />} /> */}
                        </Route>
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
                        <Route path="user/client" element={<UserList />} />
                        <Route path="user/root" element={<UserRootList />} />
                        <Route path="products" element={<ProductList />} />
                        <Route path="categories" element={<CategoryList />} />
                        <Route path="author" element={<AuthorList />} />
                        <Route path="supplieres" element={<SupplierList />} />
                        <Route path="publishs" element={<PublishList />} />
                        <Route path="profile" element={<ProfileAdmin />} />
                        <Route path="voucher" element={<Voucher />} />
                        <Route
                            path="infomation-page"
                            element={<InfomationPage />}
                        />
                        <Route
                            path="category-infomation"
                            element={<CategoryInfomation />}
                        />
                        <Route path="report-comment" element={<ReportList />} />
                        <Route path="comment" element={<CommentList />} />
                        <Route
                            path="product-series"
                            element={<ProductSeries />}
                        />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {isLayoutRoute && <ChatBox />}
            </React.Suspense>
        </div>
    );
}

export default App;
