import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import ShopCart from "./page/cart/shop_cart";

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
        {/* </Route> */}
        {/*  */}
        <Route path="/shop_cart" element={<ShopCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
