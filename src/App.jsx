import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import PrivateLayout from "./Layout/privateLayout";
import Layout from "./Layout/layout";
import Profile from './page/profile';
import OrderSearch from './page/orderSearch';
import WishList from './page/wishList';



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
                <Route path="/" element={ <Home /> }/>
            {/* </Route> */}
            {/*  */}
            <Route path="*" element={ <NotFound /> }/>
            <Route path="/profile" element={ <Profile /> }/>
            <Route path="/ordersearch" element={ <OrderSearch /> }/>
            <Route path="/wishlist" element={ <WishList /> }/>


        </Routes>

    </div>;
}

export default App
