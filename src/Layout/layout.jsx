import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
            <header>
                header
            </header>
            <div className="w-full max-w-[1280px] m-auto">
                <Outlet />
            </div>
            <footer>
                footer
            </footer>
    );
};

export default Layout;
