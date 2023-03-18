import { Outlet } from "react-router-dom";
import "./../../app.css";
import Sidebar from "../../components/AdminComponent/sidebar/Sidebar";
import Header from "../../components/AdminComponent/header";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});
const MyContainer = styled("div")({
  marginTop: "55px",
});

function AdminLayout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MyContainer className="container">
          <Sidebar />
          <Outlet />
        </MyContainer>
      </ThemeProvider>
    </>
  );
}

export default AdminLayout;
