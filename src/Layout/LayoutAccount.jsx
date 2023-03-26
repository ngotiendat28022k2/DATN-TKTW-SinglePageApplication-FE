import React from "react";
import { Outlet } from "react-router-dom";
import SidebarProfile from "../components/sidebar-profile/sidebar_profile"

const LayoutAccount = () => {
    return (
        <div className="md:flex md:justify-between md:items-start md:pb-[20px] pb-[20px]">
            <div className="md:max-w-[22%] md:w-full md:pb-0 pb-[50px]">
                <SidebarProfile />
            </div>
            <div className="md:max-w-[77%] md:w-full ">
                <Outlet/>
            </div>
        </div>
    );
};

export default LayoutAccount;
