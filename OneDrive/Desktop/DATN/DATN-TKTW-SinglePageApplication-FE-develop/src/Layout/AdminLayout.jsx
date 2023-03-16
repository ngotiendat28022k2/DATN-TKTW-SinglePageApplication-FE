import { Outlet } from "react-router-dom";
import "./../App.css";
import Sidebar from "./../components/sidebar/Sidebar";
import Topbar from "./../components/topbar/Topbar";

function AdminLayout() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
