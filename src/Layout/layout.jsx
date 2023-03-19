import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="bg-BG-Color">
            <Outlet/>
        </div>
    );
};

export default Layout;
